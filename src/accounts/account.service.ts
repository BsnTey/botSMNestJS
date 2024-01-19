import { Injectable } from '@nestjs/common';
import { AccountRepository } from './repository/account.repository';
import { ApiSM } from '../apiSM/apiSM.service';
import { ProxyService } from '../proxy/proxy.service';
import { IRefreshAccount, TypeRefreshBy } from '../common/interfaces/apiSM/apiSM.interface';
import { isValidUUID } from '../common/utils/some.utils';
import { KNOWN_ERROR } from '../app.constants';

@Injectable()
export class AccountService {
    constructor(private accountRep: AccountRepository, private proxyService: ProxyService) {}

    async findAccount(accountId: string) {
        const account = await this.accountRep.getAccount(accountId);
        return account;
    }

    async findAccountWithCookie(accountId: string) {
        const account = await this.accountRep.getAccountCookie(accountId);
        return account;
    }

    async findAccountEmail(accountId: string) {
        const account = await this.accountRep.getAccountEmail(accountId);
        return account;
    }

    async updateAccountBonusCount(accountId: string, bonusCount: string) {
        const account = await this.accountRep.updatetBonusCount(accountId, bonusCount);
        return account;
    }

    async updateTokensAccount(accountId: string, dataAccount: IRefreshAccount) {
        const account = await this.accountRep.updateTokensAccount(accountId, dataAccount);
        return account;
    }

    async setBanMp(accountId: string) {
        const account = await this.accountRep.setBanMp(accountId);
        return account;
    }

    async refresh(api: ApiSM, refreshByType: TypeRefreshBy) {
        let proxy: string;
        for (let attempt = 0; attempt < 4; attempt++) {
            try {
                proxy = this.proxyService.getRandomProxy();
                api.setProxy(proxy);
            } catch {
                throw new Error(KNOWN_ERROR.NOT_FREE_PROXIES.code);
            }

            try {
                const accountId = api.accountId;
                let isNotRefresh = false;
                const isRefreshDate = api.isRefreshDate();
                if (!isRefreshDate) isNotRefresh = await this.refreshBy(api, refreshByType);

                if (!isNotRefresh) {
                    try {
                        const dataAccount = await api.refresh();
                        await this.updateTokensAccount(accountId, dataAccount);
                    } catch (error) {
                        if (error.message == 'WRONG_TOKEN') {
                            await this.setBanMp(accountId);
                            throw new Error(KNOWN_ERROR.WRONG_TOKEN.code);
                        }
                        throw error.message;
                    }

                    isNotRefresh = await this.refreshBy(api, refreshByType);

                    if (!isNotRefresh) {
                        await this.setBanMp(accountId);
                        throw new Error(KNOWN_ERROR.WRONG_TOKEN.code);
                    }
                }
                return true;
            } catch (error) {
                const errMessage = error.message
                if (errMessage.includes('connect ECONNREFUSED')) {
                    this.proxyService.setProxyBan(proxy);
                } else {
                    throw new Error(error.message);
                }
            }

            continue;
        }

        throw new Error(KNOWN_ERROR.ERROR_CONNECT_ACCOUNT.code);
    }

    private async refreshBy(api: ApiSM, refreshByType: TypeRefreshBy) {
        let status: boolean;
        switch (refreshByType) {
            case 'shortInfo':
                status = await api.shortInfo();
                break;
            case 'detailsBonus':
                status = await api.detailsBonus();
                break;
            case 'promocode':
                status = await api.shortInfo();
                break;
        }
        return status;
    }

    async getApi(accountId: string, refreshByType: TypeRefreshBy) {
        const isValidAccount = isValidUUID(accountId);
        if (!isValidAccount) throw new Error(KNOWN_ERROR.INCORRECT_ENTERED_KEY.code);

        const account = await this.findAccount(accountId);
        if (!account) throw new Error(KNOWN_ERROR.ACCOUNT_NOT_FOUND.code);

        const readyAccount = {
            accountId: accountId,
            accessToken: account.accessToken,
            refreshToken: account.refreshToken,
            xUserId: account.xUserId,
            deviceId: account.deviceId,
            installationId: account.installationId,
            expiresIn: account.expiresIn,
        };

        try {
            const api = new ApiSM(readyAccount);
            await this.refresh(api, refreshByType);
            return api;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

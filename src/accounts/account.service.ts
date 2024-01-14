import { Injectable } from '@nestjs/common';
import { AccountRepository } from './repository/account.repository';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { ProxyService } from 'src/proxy/proxy.service';
import {
    ACCOUNT_BANNED,
    ACCOUNT_NOT_FOUND,
    ERROR_CONNECT_ACCOUNT,
    INCORRECT_ENTERED_KEY,
    NO_FREE_PROXIES,
} from 'src/app.constants';
import { TypeRefreshBy } from 'src/common/interfaces/apiSM/apiSM.interface';
import { isValidUUID } from 'src/common/utils/some.utils';

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

    async refresh(api: ApiSM, refreshByType: TypeRefreshBy) {
        let proxy: string;
        for (let attempt = 0; attempt < 4; attempt++) {
            try {
                if (attempt === 3) throw new Error(ERROR_CONNECT_ACCOUNT);

                try {
                    proxy = this.proxyService.getRandomProxy();
                    api.setProxy(proxy);
                } catch {
                    throw new Error(NO_FREE_PROXIES);
                }

                try {
                    const accountId = api.accountId;
                    let isNotRefresh = false;
                    const isRefreshDate = api.isRefreshDate();
                    if (!isRefreshDate) isNotRefresh = await this.refreshBy(api, refreshByType);

                    if (!isNotRefresh) {
                        const dataAccount = await api.refresh();
                        if (!dataAccount) {
                            await this.accountRep.setBanMp(accountId);
                            return false;
                        }
                        await this.accountRep.updateTokensAccount(accountId, dataAccount);

                        isNotRefresh = await this.refreshBy(api, refreshByType);

                        if (!isNotRefresh) {
                            await this.accountRep.setBanMp(accountId);
                            throw new Error(ACCOUNT_BANNED);
                        }
                    }
                    return true;
                } catch (error) {
                    if (error.message.includes('connect ECONNREFUSED')) {
                        this.proxyService.setProxyBan(proxy);
                    } else {
                        throw new Error(error);
                    }
                }
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
            console.log('continue');
            continue;
        }
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
        if (!isValidAccount) throw new Error(INCORRECT_ENTERED_KEY);

        const account = await this.findAccount(accountId);
        if (!account) throw new Error(ACCOUNT_NOT_FOUND);

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
            throw new Error(err);
        }
    }

}

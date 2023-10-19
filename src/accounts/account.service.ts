import { Injectable } from '@nestjs/common';
import { AccountRepository } from './repository/account.repository';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { ProxyService } from 'src/proxy/proxy.service';
import { ERROR_CONNECT_ACCOUNT, NO_FREE_PROXIES } from 'src/app.constants';
import { TypeRefreshBy } from 'src/common/interfaces/apiSM/apiSM.interface';

@Injectable()
export class AccountService {
    constructor(private accountRep: AccountRepository, private proxyService: ProxyService) {}

    async findAccount(accountId: string) {
        const account = await this.accountRep.getAccount(accountId);
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

                const accountId = api.accountId;
                let isNotRefresh = false;
                const isRefreshDate = api.isRefreshDate();
                if (!isRefreshDate) isNotRefresh = await this.refreshBy(api, refreshByType)

                if (!isNotRefresh) {
                    const dataAccount = await api.refresh();
                    if (!dataAccount) {
                        await this.accountRep.setBanMp(accountId);
                        return false;
                    }
                    await this.accountRep.updateTokensAccount(accountId, dataAccount);

                    isNotRefresh = await this.refreshBy(api, refreshByType)

                    if (!isNotRefresh) {
                        await this.accountRep.setBanMp(accountId);
                        return false;
                    }
                }
                return true;
            } catch (error) {
                console.log(error);

                if (error == '') {
                    //дописать ошибку прокси соединения
                    this.proxyService.setProxyBan(proxy);
                    continue;
                }
            }
        }
    }

    private async refreshBy(api: ApiSM, refreshByType: TypeRefreshBy) {
        let status: boolean
        switch (refreshByType) {
            case "shortInfo":
                status = await api.shortInfo()
                break;
            case "detailsBonus":
                status = await api.detailsBonus()
                break;
            case "promocode":
                status = await api.shortInfo()
                break;
        }
        return status
    }

}

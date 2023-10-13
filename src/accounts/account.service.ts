import { Injectable } from '@nestjs/common';
import { AccountRepository } from './repository/account.repository';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { ProxyService } from 'src/proxy/proxy.service';
import { TelegrafException } from 'nestjs-telegraf';
import { ERROR_CONNECT_ACCOUNT, NO_FREE_PROXIES } from 'src/app.constants';

@Injectable()
export class AccountService {
    constructor(private accountRep: AccountRepository, private proxyService: ProxyService) {}

    async findAccount(accountId: string) {
        const account = await this.accountRep.getAccount(accountId);
        return account;
    }

    async refresh(api: ApiSM) {
        let proxy: string;
        for (let attempt = 0; attempt < 4; attempt++) {
            try {
                if (attempt === 3) throw new TelegrafException(ERROR_CONNECT_ACCOUNT);

                try {
                    proxy = this.proxyService.getRandomProxy();
                    api.setProxy(proxy);
                } catch {
                    throw new TelegrafException(NO_FREE_PROXIES);
                }

                const accountId = api.accountId;
                let isRefresh = true;
                const isRefreshDate = api.isRefreshDate();
                if (!isRefreshDate) isRefresh = await api.isRefresh();

                if (isRefresh) {
                    const dataAccount = await api.refresh();
                    if (!dataAccount) {
                        await this.accountRep.setBanMp(accountId);
                        return false;
                    }
                    await this.accountRep.updateTokensAccount(accountId, dataAccount);

                    isRefresh = await api.isRefresh();

                    if (isRefresh) {
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
}

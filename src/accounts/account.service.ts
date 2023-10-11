import { Injectable } from '@nestjs/common';
import { AccountRepository } from './repository/account.repository';
import { ApiSM } from 'src/apiSM/apiSM.service';

@Injectable()
export class AccountService {
    constructor(private accountRep: AccountRepository) {}

    async findAccount(telegramId: string) {
        const account = await this.accountRep.getAccount(telegramId);
        return account;
    }

    async refresh(api: ApiSM, telegramId: string) {
        const isRefreshDate = api.isRefreshDate()
    }



}

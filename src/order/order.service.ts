import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';

@Injectable()
export class OrderService {
    // constructor(private accountService: AccountService) {}

    async findAccount(api: ApiSM, telegramId: string) {
        // const account = await this.accountService.findAccount(telegramId)
        // if (!account) return null;
        // return account
    }
}

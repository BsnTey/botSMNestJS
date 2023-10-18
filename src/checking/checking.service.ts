import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';

@Injectable()
export class CheckingService {
    constructor() {}

    async checkingAccounts(api: ApiSM, account: string[]) {

    }
}

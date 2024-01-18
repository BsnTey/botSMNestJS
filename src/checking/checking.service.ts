import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/accounts/account.service';
import { NOT_FREE_PROXIES, WRONG_TOKEN } from 'src/app.constants';
import { bringCompliance, getCombustionDates } from 'src/common/utils/some.utils';

@Injectable()
export class CheckingService {
    constructor(private accountService: AccountService) {}

    async checkingAccounts(accounts: string[]) {
        let resultChecking = {};

        await Promise.all(accounts.map((account) => this.processCheckingAccounts(resultChecking, account)));

        return bringCompliance(resultChecking, accounts);
    }

    private async processCheckingAccounts(resultChecking, accountId: string) {
        if (accountId.length === 0) return '';

        try {
            let result: string;
            const api = await this.accountService.getApi(accountId, 'detailsBonus');
            const currentAmount = api.bonusCount;
            await this.accountService.updateAccountBonusCount(accountId, String(currentAmount));
            const rawListDetailsBonus = api.rawListDetailsBonus;
            result = `${accountId}:   ${currentAmount}   `;

            const amountDateFirst = getCombustionDates(currentAmount, rawListDetailsBonus);

            if (amountDateFirst) {
                const { amount: firstAmount, date: firstDate } = amountDateFirst;

                result += ` ${firstDate} - ${firstAmount}`;
                const amountDateSecond = getCombustionDates(firstAmount, rawListDetailsBonus);

                if (amountDateSecond) {
                    const { amount: secondAmount, date: secondDate } = amountDateSecond;
                    result += `   ${secondDate} - ${secondAmount}`;
                }
            }
            result += `\n`;
            resultChecking[accountId] = result;
            console.log('Checking', accountId);
        } catch (err) {
            if (err.message == WRONG_TOKEN) err = 'Аккаунт более не доступен в МП';
            if (err.message == NOT_FREE_PROXIES) err = 'Нет свободного прокси. Подождите';
            console.log('err', accountId);
            resultChecking[accountId] = `${accountId}: ${err}\n`;
        }
    }
}

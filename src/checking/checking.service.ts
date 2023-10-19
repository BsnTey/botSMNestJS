import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/accounts/account.service';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { IOututBonusDate } from 'src/common/interfaces/some.interface';
import { bringCompliance, getCombustionDates, isValidUUID } from 'src/common/utils/some.utils';

@Injectable()
export class CheckingService {
    constructor(private accountService: AccountService) {}

    async checkingAccounts(accounts: string[]) {
        let resultChecking = {};

        await Promise.all(
            accounts.map((account) => this.processCheckingAccounts(resultChecking, account)),
        );

        return bringCompliance(resultChecking, accounts)
    }

    private async processCheckingAccounts(resultChecking, accountId: string) {
        if (accountId.length === 0) return;

        if (!isValidUUID(accountId)) {
            resultChecking[accountId] = `${accountId} Не верный ключ\n`;
            return;
        }

        const foundAccount = await this.accountService.findAccount(accountId);
        if (!foundAccount) {
            resultChecking[accountId] = `${accountId} Не найден\n`;
            return;
        }

        const readyAccount = {
            accountId: accountId,
            accessToken: foundAccount.accessToken,
            refreshToken: foundAccount.refreshToken,
            xUserId: foundAccount.xUserId,
            deviceId: foundAccount.deviceId,
            installationId: foundAccount.installationId,
            expiresIn: foundAccount.expiresIn,
        };

        try {
            let result: string;
            const api = new ApiSM(readyAccount);
            const res = await this.accountService.refresh(api, 'detailsBonus');
            if (!res) {
                resultChecking[accountId] = `${accountId} Заблокирован в боте\n`;
                return;
            }
            const currentAmount = api.bonusCount;
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
        } catch (err) {
            resultChecking[accountId] = `${accountId} {err}\n`;
        }
    }
}

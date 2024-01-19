import { Ctx, Hears, On, Scene, SceneEnter, TelegrafException } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { ALL_KEYS_MENU_BUTTON_NAME, GET_CASH_RECEIPT, KNOWN_ERROR } from 'src/app.constants';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { AccountService } from 'src/accounts/account.service';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { EmailReceiptService } from './email-receipt.service';

@Scene(GET_CASH_RECEIPT.scene)
export class EmailReceiptUpdate {
    constructor(private accountService: AccountService, private emailReceiptService: EmailReceiptService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        ctx.session['api'] = null;
        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async findAccount(@Ctx() ctx: WizardContext) {
        const accountId = ctx.message['text'];

        try {
            const account = await this.accountService.findAccountEmail(accountId);
            if (!account) throw new Error(KNOWN_ERROR.ACCOUNT_NOT_FOUND.code);

            await ctx.reply('Начался поиск, подождите');

            const cashReceipt = await this.emailReceiptService.findEmailCashReceipt(account.email, account.passImap);

            if (cashReceipt.length == 0) {
                await ctx.reply('❌ Чеков не найдено');
            }

            cashReceipt.forEach(async (receipt) => {
                await ctx.reply(receipt);
            });
        } catch (error) {
            if (Object.keys(KNOWN_ERROR).includes(error.message))
                throw new TelegrafException(KNOWN_ERROR[error.message].messageTg);
            throw new TelegrafException(error);
        }
    }
}

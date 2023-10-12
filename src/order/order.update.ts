import {
    Command,
    Ctx,
    Hears,
    Start,
    Update,
    Sender,
    Message,
    On,
    Scene,
    SceneEnter,
    Wizard,
    WizardStep,
} from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { ORDER_WIZARD } from 'src/states/states';
import { BaseService } from 'src/base/base.service';
import { isValidUUID } from 'src/common/utils/isValidText';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { AccountService } from 'src/accounts/account.service';
import { ProxyService } from 'src/proxy/proxy.service';

@Wizard(ORDER_WIZARD)
export class OrderUpdate {
    constructor(
        private baseService: BaseService,
        private accountService: AccountService,
        private proxyService: ProxyService,
    ) {}

    @WizardStep(1)
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const user = await this.baseService.GetUserWithCitys(String(telegramId));
        ctx.wizard.state['userInfo'] = user;
        ctx.wizard.state['api'] = null;
        await ctx.wizard.next();
        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }
    // @Text() msg: { text: string }
    @WizardStep(2)
    async findAccount(@Ctx() ctx: WizardContext) {
        const accountId = ctx.message['text'];

        const isValidAccount = isValidUUID(accountId);
        if (!isValidAccount)
            return await ctx.reply(
                '❌ Не верно введен ключ. Проверьте правильность написания и повторите попытку ввода заново',
                getMainMenu(),
            );

        const account = await this.accountService.findAccount(accountId);
        if (!account) return await ctx.reply('❌ Аккаунт не найден', getMainMenu());

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
            const res = await this.accountService.refresh(api);
            if (!res) return await ctx.reply('❌ Аккаунт Бан (изменить)', getMainMenu());

            console.log('order up', res);

            ctx.wizard.state['api'] = api;
            const user = ctx.wizard.state['userInfo'];
        } catch (error) {
            //дописать вывод ошибки юзеру из апи
        }
    }
}

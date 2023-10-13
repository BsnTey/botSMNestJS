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
    SceneLeave,
    TelegrafException,
    Action,
} from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { ORDER_INPUT_ARTICLE, ORDER_WIZARD } from 'src/states/states';
import { BaseService } from 'src/base/base.service';
import { isValidUUID } from 'src/common/utils/isValidText';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { AccountService } from 'src/accounts/account.service';
import { ProxyService } from 'src/proxy/proxy.service';
import { ACCOUNT_BANNED, ACCOUNT_NOT_FOUND, ALL_KEYS, INCORRECT_ENTERED_KEY, KNOWN_ERROR, UNKNOWN_ERROR } from 'src/app.constants';
import {comebackCartkeyboard, mainMenuOrderKeyboard} from '../common/keyboards/inline.keyboard'
import { OrderService } from './order.service';

// @Wizard(ORDER_WIZARD)
@Scene(ORDER_WIZARD)
export class OrderUpdate {
    constructor(
        private baseService: BaseService,
        private accountService: AccountService,
        private proxyService: ProxyService,
        private orderService: OrderService,
    ) {}

    // @WizardStep(1)
    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const user = await this.baseService.GetUserWithCitys(String(telegramId));
        ctx.session['userInfo'] = user;
        ctx.session['api'] = null;
        // ctx.wizard.state['userInfo'] = user;
        // ctx.wizard.state['api'] = null;
        // await ctx.wizard.next();
        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }

    @Hears(ALL_KEYS)
    async exit(@Ctx() ctx: WizardContext) {
        //дописать куда входим
        await ctx.scene.leave();
        // await ctx.scene.enter(ORDER_WIZARD)
    }


    // @WizardStep(2)
    @On('text')
    async findAccount(@Ctx() ctx: WizardContext) {
            const accountId = ctx.message['text'];

            const isValidAccount = isValidUUID(accountId);
            if (!isValidAccount)  throw new TelegrafException(INCORRECT_ENTERED_KEY);

            const account = await this.accountService.findAccount(accountId);
            if (!account) throw new TelegrafException(ACCOUNT_NOT_FOUND);

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
                if (!res) throw new TelegrafException(ACCOUNT_BANNED);

                ctx.session['api'] = api;
                const city = api.cityName
                // const user = ctx.wizard.state['userInfo'];
                await ctx.reply(`📱 Аккаунт найден. Баланс: ${api.bonusCount}`, mainMenuOrderKeyboard(city));
            } catch (error) {
                if (KNOWN_ERROR.includes(error.message))  throw new TelegrafException(error.message);
                throw new TelegrafException(error);
            }
    }

    @Action("go_to_cart")
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const {text, keyboard} = await this.orderService.choosingWayCart(api)

        await ctx.editMessageText(text, keyboard);
    }

    @Action("go_to_orders")
    async choosingWayOrder(@Ctx() ctx: WizardContext) {
        await ctx.reply('Вошел 2');
    }

    @Action("add_item_cart")
    async addProduct(@Ctx() ctx: WizardContext) {

        await ctx.scene.enter(ORDER_INPUT_ARTICLE);
    }

    // @SceneLeave()
    // async onSceneLeave(@Ctx() ctx: WizardContext) {
    //     await ctx.scene.enter(ORDER_WIZARD)
    // }
}



@Scene(ORDER_INPUT_ARTICLE)
export class OrderInputArticle {
    constructor(
        private baseService: BaseService,
        private accountService: AccountService,
        private proxyService: ProxyService,
        private orderService: OrderService,
    ) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        await ctx.editMessageText('Введите артикул или артикулы (через нижнее подчеркивание "_" - является разделителем для разных артикулов)', comebackCartkeyboard);
    }

    @On('text')
    async searchingAddingArticle(@Ctx() ctx: WizardContext) {
        await ctx.reply('Вошел ввод артикула');
    }

    @Hears(ALL_KEYS)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
    }

    //дописать куда входим
    // @SceneLeave()
    // async onSceneLeave(@Ctx() ctx: WizardContext) {
    //     await ctx.scene.enter(ORDER_WIZARD)
    // }
}

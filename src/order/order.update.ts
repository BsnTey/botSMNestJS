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
import { BaseService } from 'src/base/base.service';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { AccountService } from 'src/accounts/account.service';
import { ProxyService } from 'src/proxy/proxy.service';
import {
    ACCOUNT_BANNED,
    ACCOUNT_NOT_FOUND,
    ALL_KEYS_MENU_BUTTON_NAME,
    INCORRECT_ENTERED_KEY,
    KNOWN_ERROR,
    MAKE_ORDER,
    UNKNOWN_ERROR,
} from 'src/app.constants';
import { comebackCartkeyboard, mainMenuOrderKeyboard } from '../common/keyboards/inline.keyboard';
import { OrderService } from './order.service';
import { ORDER_INPUT_ARTICLE_SCENE } from 'src/states/states';
import { getValueKeysMenu, isValidUUID } from 'src/common/utils/some.utils';

@Scene(MAKE_ORDER.scene)
export class OrderUpdate {
    constructor(
        private baseService: BaseService,
        private accountService: AccountService,
        private proxyService: ProxyService,
        private orderService: OrderService,
    ) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const user = await this.baseService.GetUserWithCitys(String(telegramId));
        ctx.session['userInfo'] = user;
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

        const isValidAccount = isValidUUID(accountId);
        if (!isValidAccount) throw new TelegrafException(INCORRECT_ENTERED_KEY);

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
            const city = api.cityName;
            await ctx.reply(`📱 Аккаунт найден. Баланс: ${api.bonusCount}`, mainMenuOrderKeyboard(city));
        } catch (error) {
            if (KNOWN_ERROR.includes(error.message)) throw new TelegrafException(error.message);
            throw new TelegrafException(error);
        }
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const { text, keyboard } = await this.orderService.choosingWayCart(api);

        await ctx.editMessageText(text, keyboard);
    }

    @Action('go_to_orders')
    async choosingWayOrder(@Ctx() ctx: WizardContext) {
        await ctx.reply('Вошел 2');
    }

    @Action('add_item_cart')
    async addProduct(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_INPUT_ARTICLE_SCENE);
    }

    // @SceneLeave()
    // async onSceneLeave(@Ctx() ctx: WizardContext) {
    //     console.log('onSceneLeave MAKE_ORDER');
    //     const text = ctx.message['text'];
    //     const isMenu = ALL_KEYS_MENU_BUTTON_NAME.includes(text);
    //     if (isMenu) await ctx.scene.enter(getValueKeysMenu(text));
    // }
}

@Scene(ORDER_INPUT_ARTICLE_SCENE)
export class OrderInputArticle {
    constructor(
        private baseService: BaseService,
        private accountService: AccountService,
        private proxyService: ProxyService,
        private orderService: OrderService,
    ) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        await ctx.editMessageText(
            'Введите артикул или артикулы (через нижнее подчеркивание "_" - является разделителем для разных артикулов)',
            comebackCartkeyboard,
        );
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async searchingAddingArticle(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const text: string = ctx.message['text'];
        const articles = text.split('_');
        for (let article of articles) {
            await this.orderService.searchAndAddinputArticle(api, article);
        }
    }
}

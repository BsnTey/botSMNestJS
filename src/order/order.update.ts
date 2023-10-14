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
import { comebackCartkeyboard, getCitiesKeyboard, getFavouriteCitiesBtns, mainMenuOrderKeyboard } from '../common/keyboards/inline.keyboard';
import { OrderService } from './order.service';
import {
    ORDER_CITY_SCENE,
    ORDER_GET_ORDERS_SCENE,
    ORDER_INPUT_ARTICLE_SCENE,
    ORDER_MENU_ACCOUNT_SCENE,
    ORDER_MENU_CART_SCENE,
} from 'src/states/states';
import { getValueKeysMenu, isValidUUID, refactorCitiesAfterGetInBD } from 'src/common/utils/some.utils';
import { UserService } from 'src/users/user.service';

@Scene(MAKE_ORDER.scene)
export class OrderUpdate {
    constructor(private userService: UserService, private accountService: AccountService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { first_name: telegramName, id: telegramId } = telegramUser;
        const user = await this.userService.GetOrCreateUser({ telegramId: String(telegramId), telegramName });
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
            await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
        } catch (error) {
            if (KNOWN_ERROR.includes(error.message)) throw new TelegrafException(error.message);
            throw new TelegrafException(error);
        }
    }
}

@Scene(ORDER_MENU_ACCOUNT_SCENE)
export class OrderMenuAccount {
    constructor() {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const city = api.cityName;

        const text = `📱 Аккаунт найден. Баланс: ${api.bonusCount}`;
        const keyboard = mainMenuOrderKeyboard(city);

        if (ctx.updateType === 'callback_query') {
            await ctx.editMessageText(text, keyboard);
        } else {
            await ctx.reply(text, keyboard);
        }
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @Action('go_to_city')
    async choosingWayCity(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_CITY_SCENE);
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action('go_to_orders')
    async choosingWayOrder(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_GET_ORDERS_SCENE);
    }
}

@Scene(ORDER_CITY_SCENE)
export class OrderCity {
    constructor(private userService: UserService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const user = await this.userService.GetUserWithCitys(String(telegramId));
        const rawFavouriteCities = user.userCities;
        const favouriteCities = refactorCitiesAfterGetInBD(rawFavouriteCities)

        ctx.session['favouriteCities'] = favouriteCities;

        const favouriteCitiesBtns = getFavouriteCitiesBtns(favouriteCities)
        const citiesKeyboard = getCitiesKeyboard(favouriteCitiesBtns)
        await ctx.reply("Введите название города для его изменения. Либо выберете из Ваших избранных", citiesKeyboard);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputCity(@Ctx() ctx: WizardContext) {
        console.log("inputCity");

    }

    // @Action('')
    // async some(@Ctx() ctx: WizardContext) {}

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_GET_ORDERS_SCENE)
export class OrderGetOrders {
    constructor() {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        await ctx.reply('Вошел в сущестующие заказы');
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @Action('')
    async some(@Ctx() ctx: WizardContext) {}

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_MENU_CART_SCENE)
export class OrderMenuCart {
    constructor(private orderService: OrderService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const { text, keyboard } = await this.orderService.choosingWayCart(api);

        if (ctx.updateType === 'callback_query') {
            await ctx.editMessageText(text, keyboard);
        } else {
            await ctx.reply(text, keyboard);
        }
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @Action('add_item_cart')
    async addProduct(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_INPUT_ARTICLE_SCENE);
    }

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_INPUT_ARTICLE_SCENE)
export class OrderInputArticle {
    constructor(private orderService: OrderService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
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
            const resultAdding = await this.orderService.searchAndAddinputArticle(api, article);
            await ctx.reply(resultAdding);
        }
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }
}

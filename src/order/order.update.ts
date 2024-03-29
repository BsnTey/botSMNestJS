import { Ctx, Hears, Sender, On, Scene, SceneEnter, TelegrafException, Action } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { AccountService } from 'src/accounts/account.service';
import {
    ALL_KEYS_MENU_BUTTON_NAME,
    KNOWN_ERROR,
    MAKE_ORDER,
} from 'src/app.constants';
import {
    aproveShopKeyboard,
    comebackCartkeyboard,
    comebackOrderMenuKeyboard,
    getCitiesKeyboard,
    getFavouriteCitiesKeyboard,
    getSelectCitiesKeyboard,
    infoOrderKeyboard,
    mainMenuOrderKeyboard,
    orderHistoryKeyboard,
    ordersInfoKeyboard,
    recipientKeyboard,
} from '../common/keyboards/inline.keyboard';
import { OrderService } from './order.service';
import {
    ORDER_CHANGE_RECIPIENT_SCENE,
    ORDER_CITY_SCENE,
    ORDER_FAVOURITE_CITY_SCENE,
    ORDER_GET_ORDERS_SCENE,
    ORDER_INPUT_ARTICLE_SCENE,
    ORDER_INPUT_LINK_SCENE,
    ORDER_INPUT_PROMO_SCENE,
    ORDER_MENU_ACCOUNT_SCENE,
    ORDER_MENU_CART_SCENE,
} from 'src/states/states';
import {
    findCityName,
    getValueKeysMenu,
    isAccessShop,
    isValidInputCity,
    isValidUrl,
} from 'src/common/utils/some.utils';
import { UserService } from 'src/users/user.service';
import { ShopAddressType } from 'src/common/interfaces/some.interface';

@Scene(MAKE_ORDER.scene)
export class OrderUpdate {
    constructor(private userService: UserService, private accountService: AccountService) { }

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

        try {
            const api = await this.accountService.getApi(accountId, 'shortInfo');
            ctx.session['api'] = api;
            await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
        } catch (error) {
            if (Object.keys(KNOWN_ERROR).includes(error.message)) throw new TelegrafException(KNOWN_ERROR[error.message].messageTg);
            throw new TelegrafException(error);
        }
    }
}

@Scene(ORDER_MENU_ACCOUNT_SCENE)
export class OrderMenuAccount {
    constructor() { }

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
    constructor(private orderService: OrderService) { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const favouriteCities = await this.orderService.getFavouriteCities(String(telegramId));

        ctx.session['favouriteCities'] = favouriteCities;

        const citiesKeyboard =
            favouriteCities.length != 0 ? getFavouriteCitiesKeyboard(favouriteCities) : getCitiesKeyboard;

        await ctx.editMessageText(
            'Введите название города для его изменения. Либо выберете из Ваших избранных',
            citiesKeyboard,
        );
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputCity(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const city = ctx.message['text'];

        const isValidCity = isValidInputCity(city);
        if (!isValidCity) throw new TelegrafException(KNOWN_ERROR.CITY_NOT_VALID.messageTg);

        const { text, keyboard, cities } = await this.orderService.findCity(api, city);
        ctx.session['cities'] = cities;
        await ctx.reply(text, keyboard);
    }

    @Action(/^id_city_\d+$/)
    async selectCity(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        let cities = ctx.session['cities'] || [];
        const favouriteCities = ctx.session['favouriteCities'] || [];

        cities = cities.concat(favouriteCities);

        //@ts-ignore
        const cityId = ctx.match[0].split('_')[2];
        const cityName = findCityName(cityId, cities);

        api.setCity(cityId, cityName);
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }

    @Action('add_new_favourite_city')
    async addFavouriteCity(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_FAVOURITE_CITY_SCENE);
    }

    @Action('del_favourite_city')
    async selectDelFavouriteCity(@Ctx() ctx: WizardContext) {
        const favouriteCities = ctx.session['favouriteCities'];
        const keyboard = getSelectCitiesKeyboard(favouriteCities, 'deleteFavouriteCity');
        await ctx.editMessageText('Выберете город для удаления', keyboard);
    }

    @Action(/^del_favourite_city_\d+$/)
    async delFavouriteCity(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        //@ts-ignore
        const cityId = ctx.match[0].split('_')[3];

        const text = await this.orderService.delFavouriteCity(telegramId, cityId);
        await ctx.reply(text);
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_FAVOURITE_CITY_SCENE)
export class OrderFavouriteCity {
    constructor(private orderService: OrderService) { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText('Введите название города для добавления в избранное', comebackOrderMenuKeyboard);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputFavouriteCity(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const city = ctx.message['text'];

        const isValidCity = isValidInputCity(city);
        if (!isValidCity) throw new TelegrafException(KNOWN_ERROR.CITY_NOT_VALID.messageTg);

        const { text, keyboard, cities } = await this.orderService.findCity(api, city, 'favourite');
        ctx.session['addFavouriteCities'] = cities;
        await ctx.reply(text, keyboard);
    }

    @Action(/^add_favourite_city_\d+$/)
    async selectCity(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const addFavouriteCities = ctx.session['addFavouriteCities'];
        const favouriteCities = ctx.session['favouriteCities'];
        //@ts-ignore
        const cityId = ctx.match[0].split('_')[3];

        const text = await this.orderService.addFavouriteCity(telegramId, addFavouriteCities, favouriteCities, cityId);
        await ctx.reply(text);
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_GET_ORDERS_SCENE)
export class OrderGetOrders {
    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const orders = await api.orderHistory();
        const keyboard = orderHistoryKeyboard(orders);

        const text = 'Имеющиеся заказы на аккаунте:';

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

    @Action(/^order_(\d+)-\d+$/)
    async selectOrder(@Ctx() ctx: WizardContext) {
        //@ts-ignore
        const orderNumber = ctx.match[0].split('_')[1];

        const api = ctx.session['api'];
        const order = await api.orderInfo(orderNumber);
        const keyboard = infoOrderKeyboard(order.number, !!order.isCancelled);

        const text = order.authCode
            ? `Заказ номер: <code>${order.number}</code>\nКод авторизации? ${order.authCode}`
            : `Заказ номер: <code>${order.number}</code>\n`;

        await ctx.editMessageText(text, {
            parse_mode: 'HTML',
            ...keyboard,
        });
    }

    @Action(/^cancelled_order_(\d+)-\d+$/)
    async cancellOrder(@Ctx() ctx: WizardContext) {
        //@ts-ignore
        const orderNumber = ctx.match[0].split('_')[2];
        const api = ctx.session['api'];
        await api.cancellOrder(orderNumber);

        await ctx.reply('Заказ отменен');
        await ctx.scene.reenter();
    }

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_MENU_CART_SCENE)
export class OrderMenuCart {
    constructor(private orderService: OrderService) { }

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

    @Action('add_order_link')
    async addOrderLink(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_INPUT_LINK_SCENE);
    }

    @Action('share_cart')
    async shareCartLink(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const url = await api.createSnapshot();

        await ctx.reply(url || '❌ Ошибка в создании ссылки на корзину')
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action('add_item_cart')
    async addProduct(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_INPUT_ARTICLE_SCENE);
    }

    @Action('shop_selection')
    async choosingShopOrder(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const nonAccessItems = isAccessShop(api.rawItemsCart);

        if (nonAccessItems.length != 0)
            return await ctx.reply(`❌ ${nonAccessItems.join(', ')} Нет доступности для какого-либо вида заказа.`);

        const { refPickupAvabilityList, shopKeyboard } = await this.orderService.choosingShopOrder(api);
        ctx.session['refPickupAvabilityList'] = refPickupAvabilityList;

        await ctx.editMessageText('Выберите ТЦ', shopKeyboard);
    }

    @Action(/^id_shop_\d+$/)
    async approveShop(@Ctx() ctx: WizardContext) {
        const refPickupAvabilityList: ShopAddressType = ctx.session['refPickupAvabilityList'];
        //@ts-ignore
        const shopId = ctx.match[0].split('_')[2];

        const shop = refPickupAvabilityList[shopId];
        ctx.session['shopId'] = shopId;
        await ctx.editMessageText(
            `Подтвердите выбор ТЦ по адресу:\n${shop['shopAddress']}\n${shop['name']}`,
            aproveShopKeyboard,
        );
    }

    @Action('approve_shop')
    async choiceChangeRecipient(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const shopId = ctx.session['shopId'];

        const { potentialOrder, version } = await api.internalPickup(shopId);
        ctx.session['potentialOrder'] = potentialOrder;
        ctx.session['version'] = version;

        await ctx.editMessageText(`Изменить получателя заказа?`, recipientKeyboard);
    }

    @Action('recipient_i')
    async orderConfirmation(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const version = ctx.session['version'];

        const orderNumber = await this.orderService.orderConfirmation(api, version);
        const keyboard = ordersInfoKeyboard;

        await ctx.editMessageText(`Поздравляю! Ваш заказ под номером: <code>${orderNumber}</code>`, {
            parse_mode: 'HTML',
            ...keyboard,
        });
    }

    @Action('recipient_not_i')
    async changeRecipient(@Ctx() ctx: WizardContext) {
        ctx.scene.enter(ORDER_CHANGE_RECIPIENT_SCENE);
    }

    @Action('go_to_orders')
    async selectOrder(@Ctx() ctx: WizardContext) {
        ctx.scene.leave();
        ctx.scene.enter(ORDER_GET_ORDERS_SCENE);
    }

    @Action('add_promo')
    async addPromo(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_INPUT_PROMO_SCENE);
    }

    @Action('delete_promo')
    async deletePromo(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const status = await api.deletePromocode();
        const text = status ? 'Промокод успешно удален' : 'Промокод не удален';
        await ctx.reply(text);
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action('clear_cart')
    async clearCart(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const status = await this.orderService.clearCart(api);
        const text = status ? 'Вещи удалены из списка' : 'Вещи не удалены из списка';
        await ctx.reply(text);
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action(/id_remove_\d+_\d+/)
    async removeItemCart(@Ctx() ctx: WizardContext) {
        //@ts-ignore
        const productId = ctx.match[0].split('_')[2];
        //@ts-ignore
        const sku = ctx.match[0].split('_')[3];
        const api = ctx.session['api'];
        await this.orderService.removeItemFromCart(api, { productId: productId, sku: sku });
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action(/id_add_\d+_\d+/)
    async addItemCart(@Ctx() ctx: WizardContext) {
        //@ts-ignore
        const productId = ctx.match[0].split('_')[2];
        //@ts-ignore
        const sku = ctx.match[0].split('_')[3];
        const api = ctx.session['api'];
        await api.addItemCart(productId, sku);
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Action('go_to_menu')
    async goToMenu(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_ACCOUNT_SCENE);
    }
}

@Scene(ORDER_INPUT_ARTICLE_SCENE)
export class OrderInputArticle {
    constructor(private orderService: OrderService) { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText(
            'Введите артикул или артикулы (через нижнее подчеркивание "_" - является разделителем для разных артикулов)',
            comebackCartkeyboard,
        );
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
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

@Scene(ORDER_INPUT_LINK_SCENE)
export class OrderInputLink {
    constructor(private orderService: OrderService) { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText(
            'Отправьте ссылку, которую скопировали из мобильного приложения',
            comebackCartkeyboard,
        );
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async addOrderLink(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const text: string = ctx.message['text'];

        const isValid = isValidUrl(text);
        if (!isValid) throw new TelegrafException('❌ Не верный тип ссылки. Должна быть вида: https://www.sportmaster.ru/basket/checkout.do?specificationId=921ae601-c5a0-4dda-98aa-49ab5078f2d0&utm_source=android_appshare&utm_medium=soc&utm_campaign=socsharing_cart_android');

        const resultAdding = await this.orderService.addItemsLink(api, text);
        await ctx.reply(resultAdding);
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }
}

@Scene(ORDER_INPUT_PROMO_SCENE)
export class OrderInputPromo {
    constructor() { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText('Введите промокод', comebackCartkeyboard);
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputPromocode(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const text: string = ctx.message['text'];

        const status = api.addPromocode(text);
        const answer = status ? 'Промокод успешно применен' : 'Промокод не применен';

        await ctx.reply(answer);
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }
}

@Scene(ORDER_CHANGE_RECIPIENT_SCENE)
export class OrderChangeRecipient {
    constructor(private orderService: OrderService) { }

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];

        const keyboard = comebackCartkeyboard;

        await ctx.editMessageText(
            `Введите Имя, Фамилию, email и номер телефона через пробелы:\nИванов Иван <code>${api.emailOwner}</code> 88005553535`,
            {
                parse_mode: 'HTML',
                ...keyboard,
            },
        );
    }

    @Action('go_to_cart')
    async choosingWayCart(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(ORDER_MENU_CART_SCENE);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputRecipient(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const potentialOrder = ctx.session['potentialOrder']
        let dataRecipient = [];
        try {
            const text = ctx.message['text'];
            dataRecipient = text.split(' ');
            dataRecipient.push(potentialOrder)
        } catch {
            throw new TelegrafException(
                'Не введены данные. Они должны быть как в примере ниже через пробел:\nПетров Петр petroffff148@mail.ru 88005553535',
            );
        }
        const orderNumber = await this.orderService.inputRecipient(api, dataRecipient);
        const keyboard = ordersInfoKeyboard;

        await ctx.reply(`Поздравляю! Ваш заказ под номером: <code>${orderNumber}</code>`, {
            parse_mode: 'HTML',
            ...keyboard,
        });
    }

    @Action('go_to_orders')
    async selectOrder(@Ctx() ctx: WizardContext) {
        ctx.scene.leave();
        ctx.scene.enter(ORDER_GET_ORDERS_SCENE);
    }
}

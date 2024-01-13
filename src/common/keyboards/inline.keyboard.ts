import { Markup } from 'telegraf';
import { IItemListCart } from '../interfaces/apiSM/apiSM.interface';
import { IFavouriteCities, Order, ShopAddressType } from '../interfaces/some.interface';

export const mainMenuOrderKeyboard = (city: string) => {
    return Markup.inlineKeyboard([
        [Markup.button.callback(`Изменить город: ${city}`, 'go_to_city')],
        [Markup.button.callback(`Перейти в корзину`, 'go_to_cart')],
        [Markup.button.callback(`Перейти к заказам`, 'go_to_orders')],
    ]);
};

export const cartItemsOrderKeyboard = (cartItems: Array<IItemListCart>) => {
    const keyboard = [];
    for (let item of cartItems) {
        keyboard.push([Markup.button.callback(item.name, `id_remove_${item.productId}_${item.sku}`)]);
    }

    keyboard.push(
        [Markup.button.callback('Добавить товар', 'add_item_cart')],
        [Markup.button.callback('Внести корзину по ссылке', 'add_order_link')],
        [
            Markup.button.callback('Поделиться корзиной', 'share_cart'),
            Markup.button.callback('Очистить корзину', 'clear_cart'),
        ],
        [
            Markup.button.callback('Добавить промокод', 'add_promo'),
            Markup.button.callback('Удалить промокод', 'delete_promo'),
        ],
        [Markup.button.callback('Перейти к выбору ТЦ', 'shop_selection')],
        [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
    );

    return Markup.inlineKeyboard(keyboard);
};

export const emptyCartKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Добавить товар', 'add_item_cart')],
    [Markup.button.callback('Внести корзину по ссылке', 'add_order_link')],
    [
        Markup.button.callback('Доб. Пакет', 'id_add_23748420299_41707140299'),
        Markup.button.callback('Доб. Батончик', 'id_add_29280430299_51691400299'),
        Markup.button.callback('Доб. Б.Пакет', 'id_add_23748410299_41707130299'),
    ],
    [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
]);

export const comebackCartkeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Вернуться в корзину', 'go_to_cart')],
]);

export const comebackOrderMenuKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
]);

export const getFavouriteCitiesKeyboard = (favouriteCities: any) => {
    const btns = [
        [Markup.button.callback('Добавить город в избранное', 'add_new_favourite_city')],
        [Markup.button.callback('Удалить город', 'del_favourite_city')],
        [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
    ];
    const favouriteCitiesBtns = favouriteCities.map((city) => {
        return [Markup.button.callback(`${city.name}`, `id_city_${city.id}`)];
    });
    return Markup.inlineKeyboard(btns.concat(favouriteCitiesBtns));
};

export const getCitiesKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Добавить город в избранное', 'add_new_favourite_city')],
    [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
]);

export const getSelectCitiesKeyboard = (cities: any[], typeCity = 'common') => {
    return Markup.inlineKeyboard(
        cities.map((city) => {
            return [
                Markup.button.callback(
                    `${city.fullName}`,
                    typeCity === 'common'
                        ? `id_city_${city.id}`
                        : typeCity === 'favourite'
                        ? `add_favourite_city_${city.id}`
                        : `del_favourite_city_${city.id}`,
                ),
            ];
        }),
    );
};

export const accessShopsKeyboard = (shops: ShopAddressType) => {
    const keyboard = [];
    for (let shopKey in shops) {
        const shop = shops[shopKey];
        keyboard.push([Markup.button.callback(`${shop.name} ${shop.availability}`, `id_shop_${shopKey}`)]);
    }
    return Markup.inlineKeyboard(keyboard);
};

export const aproveShopKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Подтвердить`, `approve_shop`)],
    [Markup.button.callback(`Вернуться назад`, 'shop_selection')],
]);

export const recipientKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Изменить получателя`, `recipient_not_i`)],
    [Markup.button.callback(`Оставить из профиля`, 'recipient_i')],
]);

export const ordersInfoKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Перейти к заказам`, `go_to_orders`)],
]);

export const qrCodeUpdateKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Обновить Код`, `update_qrcode`)],
]);

export const orderHistoryKeyboard = (orders: Order[]) => {
    const keyboard = [];
    for (const order of orders) {
        keyboard.push([
            Markup.button.callback(
                `${order.number} ${order.status.statusText} ${order.receiptCode || ''}`,
                `order_${order.number}`,
            ),
        ]);
    }
    keyboard.push([Markup.button.callback(`Вернуться в меню`, `go_to_menu`)]);
    return Markup.inlineKeyboard(keyboard);
};

export const infoOrderKeyboard = (orderNumber: string, isCancelled: boolean) => {
    const keyboard = [];

    !isCancelled && keyboard.push([Markup.button.callback(`Отменить заказ`, `cancelled_order_${orderNumber}`)]);

    keyboard.push([Markup.button.callback(`Вернуться к заказам`, `go_to_orders`)]);
    keyboard.push([Markup.button.url(`Посмотреть заказ на сайте`, `http://nonofficialsport.ru/${orderNumber}`)]);

    return Markup.inlineKeyboard(keyboard);
};

export const profileMenuKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Как получить бонусы`, `go_to_requirement`)],
    [
        Markup.button.callback(`Магазин`, 'go_to_shop'),
        Markup.button.callback(`Чекер промо`, 'check_promo'),
    ],
    [Markup.button.callback(`Получить инфо по заказу`, 'get_info_order')],
]);

export const calculateInfoKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Как пользоваться калькулятором`, `go_to_calculate_info`)],
]);

export const calculateShowKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback(`Показать расчет индивидуально`, `go_to_calculate_show`)],
]);
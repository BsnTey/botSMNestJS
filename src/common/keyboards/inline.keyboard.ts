import { Markup } from 'telegraf';
import { IItemListCart } from '../interfaces/apiSM/apiSM.interface';
import { IFavouriteCities } from '../interfaces/some.interface';
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';

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

export const getFavouriteCitiesBtns = (favouriteCities: IFavouriteCities[]) => {
    const favouriteCitiesBtns = favouriteCities.map((city) => {
        return [Markup.button.callback(`${city.name}`, `id_city_${city.cityId}`)];
    });

    return favouriteCitiesBtns;
};

export const getCitiesKeyboard = (favouriteCities: any = []) => {
    return Markup.inlineKeyboard(
        [
            [Markup.button.callback('Добавить город', 'add_new_favourite_city')],
            [Markup.button.callback('Удалить город', 'add_order_link')],
            [Markup.button.callback('Вернуться в меню', 'go_to_menu')],
        ].concat(favouriteCities),
    );
};

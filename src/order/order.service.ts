import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';
import {
    cartItemsOrderKeyboard,
    comebackOrderMenuKeyboard,
    emptyCartKeyboard,
    getSelectCitiesKeyboard,
} from '../common/keyboards/inline.keyboard';
import { prepareListOutput } from 'src/common/utils/transformRespBody';
import { TelegrafException } from 'nestjs-telegraf';
import { ERROR_GET_CART } from 'src/app.constants';
import { UserService } from 'src/users/user.service';
import { findFavouriteCityName, refactorCitiesAfterGetInBD } from 'src/common/utils/some.utils';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import { Markup } from 'telegraf/typings/telegram-types';

@Injectable()
export class OrderService {
    constructor(private userService: UserService) {}

    async choosingWayCart(api: ApiSM) {
        const isItemsCart = await api.getListCart();
        if (isItemsCart == null) throw new TelegrafException(ERROR_GET_CART);

        const itemsCart = api.itemsCart;
        let text: any;
        let keyboard: any;
        if (itemsCart.length != 0) {
            keyboard = cartItemsOrderKeyboard(itemsCart);
            text = prepareListOutput(api.rawItemsCart);
        } else {
            text = `📱 Аккаунт найден. Баланс: ${api.bonusCount}`;
            keyboard = emptyCartKeyboard;
        }

        return {
            text: text,
            keyboard: keyboard,
        };
    }

    async searchAndAddinputArticle(api: ApiSM, article: string) {
        const searchProduct = await api.searchProduct(article);
        let answer: string;

        if (searchProduct) {
            const productId = searchProduct.id;
            const skus = searchProduct.skus;
            let sku: string;
            for (let sku_in of skus) {
                const code = sku_in.code;
                if (article.toLowerCase() == code.toLowerCase()) {
                    sku = sku_in.id;
                    break;
                }
            }
            const resultAdding = await api.addItemCart(productId, sku);

            if ('cartLite' in resultAdding.data) {
                answer = `${article.toUpperCase()} Добавлен в корзину\n`;
            } else if ('PRODUCT_IS_NOT_AVAILABLE' in resultAdding) {
                answer = `${article.toUpperCase()} Интересующий вас товар недоступен для покупки\n`;
            } else if ('PRODUCT_IS_NOT_ACTIVE' in resultAdding) {
                answer = `${article.toUpperCase()} Интересующий вас товар неактивен\n`;
            } else {
                answer = `${article.toUpperCase()} Ошибка добавления в корзину\n`;
            }
        } else {
            answer = `${article.toUpperCase()} Не найден\n`;
        }
        return answer;
    }

    async getFavouriteCities(telegramId: string) {
        const user = await this.userService.GetUserWithCitys(telegramId);
        const rawFavouriteCities = user.userCities;
        const favouriteCities = refactorCitiesAfterGetInBD(rawFavouriteCities);
        return favouriteCities;
    }

    async findCity(api: ApiSM, city: string, typeCity = 'common') {
        const foundCities = await api.findCity(city);

        let text: string;
        let keyboard: Markup<InlineKeyboardMarkup>;

        if (foundCities.length != 0) {
            text = 'Выберете город из доступного списка';
            keyboard = getSelectCitiesKeyboard(foundCities, typeCity);
        } else {
            text = 'Город не найден. Попробуйте ввести еще раз';
            keyboard = comebackOrderMenuKeyboard;
        }

        return { text, keyboard, cities: foundCities };
    }

    async addFavouriteCity(telegramId: string, addFavouriteCities, favouriteCities, cityId) {
        const isFoundCity = favouriteCities.find((city) => city.id === cityId);
        let text: string;

        if (!isFoundCity) {
            const selectedFavouriteCity = findFavouriteCityName(cityId, addFavouriteCities);
            const isCreate = await this.userService.createUserCity(String(telegramId), selectedFavouriteCity);
            if (isCreate) {
                text = 'Город добавлен в избранное';
            } else {
                text = 'Город не добавлен';
            }
        } else {
            text = 'Выбранный город уже есть в списке избранного';
        }

        return text;
    }
}

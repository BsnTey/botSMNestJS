import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';
import {
    accessShopsKeyboard,
    cartItemsOrderKeyboard,
    comebackOrderMenuKeyboard,
    emptyCartKeyboard,
    getSelectCitiesKeyboard,
} from '../common/keyboards/inline.keyboard';
import { prepareListOutput } from 'src/common/utils/transformRespBody';
import { TelegrafException } from 'nestjs-telegraf';
import { KNOWN_ERROR } from 'src/app.constants';
import { UserService } from 'src/users/user.service';
import { checkPhoneNumber, findFavouriteCityName, refactorCitiesAfterGetInBD, refactorShopAddress } from 'src/common/utils/some.utils';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import { Markup } from 'telegraf/typings/telegram-types';
import { AccountService } from 'src/accounts/account.service';
import { ShopAddressType } from 'src/common/interfaces/some.interface';

@Injectable()
export class OrderService {
    constructor(private userService: UserService, private accountService: AccountService) {}

    async choosingWayCart(api: ApiSM) {
        const isItemsCart = await api.getListCart();
        if (isItemsCart == null) throw new TelegrafException(KNOWN_ERROR.ERROR_GET_CART.messageTg);

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

    async addFavouriteCity(telegramId: string, addFavouriteCities, favouriteCities, cityId: string) {
        const isFoundCity = favouriteCities.find((city) => city.id === cityId);
        let text: string;

        if (!isFoundCity) {
            const selectedFavouriteCity = findFavouriteCityName(cityId, addFavouriteCities);
            const isCreate = await this.userService.createUserCity(String(telegramId), selectedFavouriteCity);
            text = isCreate ? 'Город добавлен в избранное' : 'Город не добавлен';
        } else {
            text = 'Выбранный город уже есть в списке избранного';
        }

        return text;
    }

    async delFavouriteCity(telegramId: string, cityId: string) {
        const isDel = await this.userService.delUserCity(String(telegramId), cityId);
        return isDel ? 'Город удален из избранного' : 'Город не удален';
    }

    async addItemsLink(api: ApiSM, link: string) {
        const url = new URL(link);
        const specificationId = url.searchParams.get('specificationId');
        const status = await api.applySnapshot(specificationId);
        return status ? 'Товары были добавлены в корзину' : 'Товары не добавлены';
    }

    async clearCart(api: ApiSM) {
        const itemsCart = api.itemsCart;
        const status = await api.removeItemFromCart(itemsCart);
        return status;
    }

    async removeItemFromCart(api: ApiSM, removeitem: { productId: string; sku: string }) {
        const status = await api.removeItemFromCart([
            {
                productId: removeitem.productId,
                sku: removeitem.sku,
            },
        ]);
        return status;
    }

    async choosingShopOrder(api: ApiSM) {
        const pickupAvabilityList = await api.internalPickupAvailability();
        const refPickupAvabilityList: ShopAddressType = refactorShopAddress(pickupAvabilityList);
        const shopKeyboard = accessShopsKeyboard(refPickupAvabilityList);

        return { refPickupAvabilityList, shopKeyboard };
    }

    async orderConfirmation(api: ApiSM, version: string) {
        const orderNumber = await api.submitOrder(version);
        return orderNumber;
        //доделать систему бонусов
    }

    async inputRecipient(api: ApiSM, dataRecipient: string[]) {
        const [firstName, lastName, email, number, potentialOrder] = dataRecipient;

        if (!firstName.match(/[а-яёА-ЯЁ]+/g)) throw new Error("Имя должно быть введено на кириллице");

        if (!lastName.match(/[а-яёА-ЯЁ]+/g)) throw new Error("Фамилия должна быть введена на кириллице");

        if (!email.match(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)) throw new Error("Не верный формат email. Он должен быть вида example@example.ru");

        const checkNumberPhone = checkPhoneNumber(number)
        if (!!!checkNumberPhone) throw new Error("Неправильно введён номер! Номер должен иметь вид 88005553535");

        const version = await api.approveRecipientOrder({
            firstName,
            lastName,
            email,
            nationalNumber: checkNumberPhone,
            potentialOrder
        })

        return await this.orderConfirmation(api, version)
    }
}

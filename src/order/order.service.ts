import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { cartItemsOrderKeyboard, emptyCartKeyboard } from '../common/keyboards/inline.keyboard';
import { prepareListOutput } from 'src/common/utils/transformRespBody';
import { TelegrafException } from 'nestjs-telegraf';
import { ERROR_GET_CART } from 'src/app.constants';

@Injectable()
export class OrderService {
    // constructor(private accountService: AccountService) {}

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
        }
    }
}

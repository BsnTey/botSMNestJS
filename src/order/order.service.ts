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
}

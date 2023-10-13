import { CHANGE_NUMBER, CHECK, GET_COOKIE, MAKE_ORDER, GET_QR, GET_CASH_RECEIPT, PROFILE, HELP } from 'src/app.constants';
import { Markup } from 'telegraf';

export function getMainMenu() {
    return Markup.keyboard([
        [CHANGE_NUMBER, MAKE_ORDER],
        [GET_COOKIE, CHECK],
        [GET_QR, GET_CASH_RECEIPT],
        [PROFILE, HELP],
    ]).resize();
}

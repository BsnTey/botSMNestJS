import {
    CHANGE_NUMBER,
    CHECK,
    GET_COOKIE,
    MAKE_ORDER,
    GET_QR,
    GET_CASH_RECEIPT,
    PROFILE,
    HELP,
} from 'src/app.constants';
import { Markup } from 'telegraf';

export function getMainMenu() {
    return Markup.keyboard([
        [CHANGE_NUMBER.name, MAKE_ORDER.name],
        [GET_COOKIE.name, CHECK.name],
        [GET_QR.name, GET_CASH_RECEIPT.name],
        [PROFILE.name, HELP.name],
    ]).resize();
}

import {
    CHANGE_NUMBER,
    CHECK,
    GET_COOKIE,
    MAKE_ORDER,
    GET_QR,
    GET_CASH_RECEIPT,
    PROFILE,
    HELP,
    CALCULATE_BONUS,
} from 'src/app.constants';
import { Markup } from 'telegraf';

export function getMainMenu() {
    return Markup.keyboard([
        [CHANGE_NUMBER.name, MAKE_ORDER.name],
        [CALCULATE_BONUS.name, CHECK.name],
        [GET_COOKIE.name, GET_QR.name, GET_CASH_RECEIPT.name],
        [PROFILE.name, HELP.name],
    ]).resize();
}

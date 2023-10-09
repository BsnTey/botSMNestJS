import { Markup } from 'telegraf';

export function getMainMenu() {
    return Markup.keyboard([
        ['📱 Смена номера', '🛒 Сделать заказ'],
        ['🔑 Выдать Cookie', '♻️ Чекер'],
        ['🪪 Выдать QR_Code', '✉️ Выдать Кассовый чек'],
        ['🏠️ Личный кабинет', '📞 Поддержка'],
    ]).resize();
}

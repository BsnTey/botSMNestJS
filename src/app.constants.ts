import {
    CHANGE_NUMBER_SCENE,
    CHECKER_SCENE,
    GET_CASH_RECEIPT_SCENE,
    GET_COOKIE_SCENE,
    GET_QR_CODE_SCENE,
    HELP_SCENE,
    ORDER_SCENE,
    PROFILE_SCENE,
} from './states/states';

export const CHANGE_NUMBER = {
    name: '📱 Смена номера',
    scene: CHANGE_NUMBER_SCENE,
};

export const MAKE_ORDER = {
    name: '🛒 Сделать заказ',
    scene: ORDER_SCENE,
};

export const GET_COOKIE = {
    name: '🔑 Выдать Cookie',
    scene: GET_COOKIE_SCENE,
};

export const CHECK = {
    name: '♻️ Чекер',
    scene: CHECKER_SCENE,
};

export const GET_QR = {
    name: '🪪 Выдать QR_Code',
    scene: GET_QR_CODE_SCENE,
};

export const GET_CASH_RECEIPT = {
    name: '✉️ Выдать Кассовый чек',
    scene: GET_CASH_RECEIPT_SCENE,
};

export const PROFILE = {
    name: '🏠️ Личный кабинет',
    scene: PROFILE_SCENE,
};

export const HELP = {
    name: '📞 Поддержка',
    scene: HELP_SCENE,
};

export const UNKNOWN_ERROR = '❌ Неизвестная ошибка. Обратитесь к Администратору';
export const INCORRECT_ENTERED_KEY =
    '❌ Не верно введен ключ. Проверьте правильность написания и повторите попытку ввода заново';
export const ACCOUNT_NOT_FOUND = '❌ Аккаунт не найден';
export const ACCOUNT_BANNED = '❌ Аккаунт более не доступен. Используйте куки или обратитесь к Администратору';
export const ERROR_CONNECT_ACCOUNT = '❌ Проблемы с подключением аккаунта. Подождите 5-10мин';
export const NO_FREE_PROXIES = '❌ Нет свободных прокси. Подождите 5-10мин. Сообщите Администратору';
export const ERROR_GET_CART = '❌ Ошибка получения корзины. Попробуйте еще раз';
export const ERROR_CREATE_LINK_CART = '❌ Ошибка в создании ссылки на корзину. Попробуйте еще раз';
export const CITY_NOT_VALID =
    '❌ Не верно введено название города. Название должно содержать только кириллицу. Введите еще раз';
    export const ERROR_ORDER_LINK = '❌ Не верный тип ссылки. Должна быть вида: https://www.sportmaster.ru/basket/checkout.do?specificationId=921ae601-c5a0-4dda-98aa-49ab5078f2d0&utm_source=android_appshare&utm_medium=soc&utm_campaign=socsharing_cart_android';

export const ALL_KEYS_MENU_BUTTON = [
    CHANGE_NUMBER,
    MAKE_ORDER,
    GET_COOKIE,
    CHECK,
    GET_QR,
    GET_CASH_RECEIPT,
    PROFILE,
    HELP,
];

export const ALL_KEYS_MENU_BUTTON_NAME = ALL_KEYS_MENU_BUTTON.map((item) => item.name);

export const KNOWN_ERROR = [
    INCORRECT_ENTERED_KEY,
    ACCOUNT_NOT_FOUND,
    ACCOUNT_BANNED,
    ERROR_CONNECT_ACCOUNT,
    NO_FREE_PROXIES,
];

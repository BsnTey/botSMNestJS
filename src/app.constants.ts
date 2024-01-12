import {
    ADMIN_SCENE,
    CALCULATE_SCENE,
    CHANGE_NUMBER_SCENE,
    CHECKER_SCENE,
    GET_CASH_RECEIPT_SCENE,
    GET_COOKIE_SCENE,
    GET_QR_CODE_SCENE,
    HELP_SCENE,
    ORDER_SCENE,
    PROFILE_SCENE,
    START_SCENE,
} from './states/states';

export const CALCULATE_BONUS = {
    name: '💵 Рассчитать стоимость',
    scene: CALCULATE_SCENE,
};

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
    name: '🪪 Выдать QR',
    scene: GET_QR_CODE_SCENE,
};

export const GET_CASH_RECEIPT = {
    name: '✉️ Выдать чек',
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

export const START = {
    name: '/start',
    scene: START_SCENE,
};

export const ADMIN = {
    name: '/admin',
    scene: ADMIN_SCENE,
};

export const ALL_KEYS_MENU_BUTTON = [
    CALCULATE_BONUS,
    CHANGE_NUMBER,
    MAKE_ORDER,
    GET_COOKIE,
    CHECK,
    GET_QR,
    GET_CASH_RECEIPT,
    PROFILE,
    HELP,
    START,
    ADMIN
];

export const ALL_KEYS_MENU_BUTTON_NAME = ALL_KEYS_MENU_BUTTON.map((item) => item.name);

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
export const ERROR_ORDER_LINK =
    '❌ Не верный тип ссылки. Должна быть вида: https://www.sportmaster.ru/basket/checkout.do?specificationId=921ae601-c5a0-4dda-98aa-49ab5078f2d0&utm_source=android_appshare&utm_medium=soc&utm_campaign=socsharing_cart_android';
export const ERROR_PHONE_NUMBER = '❌ Неправильно введён номер! Номер должен иметь вид 88005553535';
export const GOOD_SEND_PHONE_CODE =
    'Код выслан на указанный номер. Отправьте его в чат. Если код не пришел, то проблема в номере, используйте другой, ранее не использованный в Спортмастер. У вас есть 3 попытки отправки кода в день';
export const ERROR_SEND_PHONE_CODE = '❌ Слишком много попыток запроса кода. Обратитесь в поддержку';
export const ERROR_ALREADY_USED_PHONE =
    '❌ Номер уже занят. Попробуйте заново и введите ранее не зарегистрированный в Спортмастер';
export const ERROR_CODE_PHONE = '❌ В коде должно быть 4 цифры, повторите ввод';
export const ERROR_TOO_MANY_INCORRECT_CODE_PHONE = '❌ Много попыток ввода неправильного кода. Попробуйте завтра';
export const ERROR_INCORRECT_CODE_PHONE = '❌ Не верный код';
export const ERROR_PHONE = '❌ Номер телефона уже занят. Используйте ранее не зарегистрированный';
export const ERROR_BAN_ACCOUNT = '❌ Возможно бан аккаунта. Обратитесь в поддержку или попробуйте еще раз';
export const GOOD_CHANGE_NUMBER_PHONE = '✅ Номер успешно изменен. Можете авторизовываться в аккаунт';

export const KNOWN_ERROR = [
    INCORRECT_ENTERED_KEY,
    ACCOUNT_NOT_FOUND,
    ACCOUNT_BANNED,
    ERROR_CONNECT_ACCOUNT,
    NO_FREE_PROXIES,
];

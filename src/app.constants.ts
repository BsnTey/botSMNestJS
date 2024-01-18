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
    ADMIN,
];

export const ALL_KEYS_MENU_BUTTON_NAME = ALL_KEYS_MENU_BUTTON.map((item) => item.name);

export const UNKNOWN_ERROR = '❌ Неизвестная ошибка. Обратитесь к Администратору';

export const KNOWN_ERROR = {
    INCORRECT_ENTERED_KEY: {
        code: 'INCORRECT_ENTERED_KEY',
        messageTg: '❌ Не верно введен ключ. Проверьте правильность написания и повторите попытку ввода заново',
        messageCheck: 'Не верно введен ключ',
    },
    ACCOUNT_NOT_FOUND: {
        code: 'ACCOUNT_NOT_FOUND',
        messageTg: '❌ Аккаунт не найден',
        messageCheck: 'Не найден',
    },
    WRONG_TOKEN: {
        code: 'WRONG_TOKEN',
        messageTg: '❌ Аккаунт более не доступен в боте. Используйте куки или обратитесь к Администратору',
        messageCheck: 'Не доступен в боте',
    },
    ERROR_CONNECT_ACCOUNT: {
        code: 'ERROR_CONNECT_ACCOUNT',
        messageTg: '❌ Проблемы с подключением аккаунта. Подождите 5-10мин',
        messageCheck: 'Проблема прокси. Подождите',
    },
    NOT_FREE_PROXIES: {
        code: 'NOT_FREE_PROXIES',
        messageTg: '❌ Нет свободных прокси. Подождите 5-10мин. Сообщите Администратору',
        messageCheck: 'Проблема прокси. Подождите',
    },
    ERROR_GET_CART: {
        code: 'ERROR_GET_CART',
        messageTg: '❌ Ошибка получения корзины. Попробуйте еще раз',
    },
    ERROR_CREATE_LINK_CART: {
        code: 'ERROR_CREATE_LINK_CART',
        messageTg: '❌ Ошибка в создании ссылки на корзину. Попробуйте еще раз',
    },
    CITY_NOT_VALID: {
        code: 'CITY_NOT_VALID',
        messageTg: '❌ Не верно введено название города. Название должно содержать только кириллицу. Введите еще раз',
    },
    ERROR_PHONE_NUMBER: {
        code: 'ERROR_PHONE_NUMBER',
        messageTg: '❌ Неправильно введён номер! Номер должен иметь вид 88005553535',
    },
    GOOD_SEND_PHONE_CODE: {
        code: 'GOOD_SEND_PHONE_CODE',
        messageTg: 'Код выслан на указанный номер. Отправьте его в чат. Если код не пришел, то проблема в номере, используйте другой, ранее не использованный в Спортмастер. У вас есть 3 попытки отправки кода в день',
    },
    ERROR_SEND_PHONE_CODE: {
        code: 'ERROR_SEND_PHONE_CODE',
        messageTg: '❌ Слишком много попыток запроса кода. Обратитесь в поддержку',
    },
    ERROR_ALREADY_USED_PHONE: {
        code: 'ERROR_ALREADY_USED_PHONE',
        messageTg: '❌ Номер уже занят. Попробуйте заново и введите ранее не зарегистрированный в Спортмастер',
    },
    ERROR_CODE_PHONE: {
        code: 'ERROR_CODE_PHONE',
        messageTg: '❌ В коде должно быть 4 цифры, повторите ввод',
    },
    ERROR_TOO_MANY_INCORRECT_CODE_PHONE: {
        code: 'ERROR_TOO_MANY_INCORRECT_CODE_PHONE',
        messageTg: '❌ Много попыток ввода неправильного кода. Попробуйте завтра',
    },
    ERROR_INCORRECT_CODE_PHONE: {
        code: 'ERROR_INCORRECT_CODE_PHONE',
        messageTg: '❌ Не верный код',
    },
    ERROR_PHONE: {
        code: 'ERROR_PHONE',
        messageTg: '❌ Номер телефона уже занят. Используйте ранее не зарегистрированный',
    },
}


export const GOOD_CHANGE_NUMBER_PHONE = '✅ Номер успешно изменен. Можете авторизовываться в аккаунт';

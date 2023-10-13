import { ALL_KEYS_MENU_BUTTON } from 'src/app.constants';

const validate = require('uuid-validate');

export const isValidUUID = (uuid: string): boolean => {
    return validate(uuid);
};

export const getCurrentTimestamp = () => {
    const timestamp = new Date().getTime();
    return Math.floor(timestamp / 1000);
};

export const getValueKeysMenu = (key: string) => ALL_KEYS_MENU_BUTTON.find((btnObj) => key === btnObj.name)?.scene;

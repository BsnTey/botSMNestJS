const validate = require('uuid-validate');

export const isValidUUID = (uuid: string): boolean => {
    return validate(uuid);
};

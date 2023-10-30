import { Injectable } from '@nestjs/common';
import { ApiSM } from 'src/apiSM/apiSM.service';
import {
    ERROR_PHONE_NUMBER,
    ERROR_CODE_PHONE,
    GOOD_CHANGE_NUMBER_PHONE,
    ERROR_INCORRECT_CODE_PHONE,
    ERROR_TOO_MANY_INCORRECT_CODE_PHONE,
    ERROR_PHONE,
} from 'src/app.constants';
import { checkPhoneNumber, isValidInputCodePhone } from 'src/common/utils/some.utils';

@Injectable()
export class ChangeNumberService {
    constructor() {}

    async sendSms(api: ApiSM, phoneNumber: string) {
        phoneNumber = checkPhoneNumber(phoneNumber);
        if (!!!phoneNumber) throw new Error(ERROR_PHONE_NUMBER);
        try {
            const requestId = await api.sendSms(phoneNumber);
            return requestId;
        } catch (err) {
            console.log(err);
            if (err.message === 'TOO_MANY_INCORRECT_CODE_INPUTS') throw new Error(ERROR_TOO_MANY_INCORRECT_CODE_PHONE);
            throw new Error(err.message);
        }
    }

    async phoneChange(api: ApiSM, requestId: string, code: string) {
        const isValidCode = isValidInputCodePhone(code);
        if (!isValidCode) throw new Error(ERROR_CODE_PHONE);

        let token: string;

        try {
            token = await api.verifyCheck(requestId, code);
        } catch (err) {
            console.log(err);
            if (err.message === 'SMS_CODE_INCORRECT') throw new Error(ERROR_INCORRECT_CODE_PHONE);
            throw new Error(err.message);
        }

        try {
            const status = await api.changePhone(token);
            return GOOD_CHANGE_NUMBER_PHONE;
        } catch (err) {
            console.log(err);
            if (err.message === 'PHONE_ALREADY_USED') throw new Error(ERROR_PHONE);
            throw new Error(err.message);
        }
    }
}

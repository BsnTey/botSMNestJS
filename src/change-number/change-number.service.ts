import { Injectable } from '@nestjs/common';
import { TelegrafException } from 'nestjs-telegraf';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { ERROR_BAN_ACCOUNT, ERROR_PHONE_NUMBER, ERROR_SEND_PHONE_CODE, ERROR_CODE_PHONE } from 'src/app.constants';
import { checkPhoneNumber, isValidInputCodePhone } from 'src/common/utils/some.utils';

@Injectable()
export class ChangeNumberService {
    constructor() {}

    async sendSms(api: ApiSM, phoneNumber: string) {
        phoneNumber = checkPhoneNumber(phoneNumber)
        if(!!!phoneNumber) throw new TelegrafException(ERROR_PHONE_NUMBER);
        try {
            const requestId = await api.sendSms(phoneNumber)
            return requestId
        } catch (err) {
            console.log(err);
            // дописать ошибки
            if (err.data.error.code === 'PHONE_ALREADY_USED') throw new Error(ERROR_SEND_PHONE_CODE);
            if (err.data.error.code === 'PHONE_ALREADY_USED') throw new Error(ERROR_BAN_ACCOUNT);
        }

    }

    async phoneChange(api: ApiSM, code: string) {
        const isValidCode = isValidInputCodePhone(code)
        if(!isValidCode) throw new TelegrafException(ERROR_CODE_PHONE);

        
    }

}

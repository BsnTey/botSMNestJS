import { Injectable } from '@nestjs/common';
import { TelegrafException } from 'nestjs-telegraf';
import { ApiSM } from 'src/apiSM/apiSM.service';
import {KNOWN_ERROR} from 'src/app.constants';
import { checkPhoneNumber, isValidInputCodePhone } from 'src/common/utils/some.utils';

@Injectable()
export class ChangeNumberService {
    constructor() {}

    async sendSms(api: ApiSM, phoneNumber: string) {
        phoneNumber = checkPhoneNumber(phoneNumber);
        if (!!!phoneNumber) throw new TelegrafException(KNOWN_ERROR.ERROR_PHONE_NUMBER.messageTg);
        try {
            const requestId = await api.sendSms(phoneNumber);
            return requestId;
        } catch (err) {
            if (Object.keys(KNOWN_ERROR).includes(err.message)) throw new TelegrafException(KNOWN_ERROR[err.message].messageTg);
            throw new TelegrafException(err.message);
        }
    }

    async phoneChange(api: ApiSM, requestId: string, code: string) {
        const isValidCode = isValidInputCodePhone(code);
        if (!isValidCode) throw new TelegrafException(KNOWN_ERROR.ERROR_CODE_PHONE.messageTg);

        let token: string;

        try {
            token = await api.verifyCheck(requestId, code);
        } catch (err) {
            if (Object.keys(KNOWN_ERROR).includes(err.message)) throw new TelegrafException(KNOWN_ERROR[err.message].messageTg);
            throw new TelegrafException(err.message);
        }

        try {
            await api.changePhone(token);
        } catch (err) {
            if (Object.keys(KNOWN_ERROR).includes(err.message)) throw new TelegrafException(KNOWN_ERROR[err.message].messageTg);
            throw new TelegrafException(err.message);
        }
    }
}

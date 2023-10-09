import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { IRefreshOutput, SMHeaders } from 'src/common/interfaces/apiSM/apiSM.interface';

export class ApiSMService {
    private cityId = '1720920299';
    private cityName = 'Москва';
    private accessToken: string | null = null;
    private refreshToken: string | null = null;
    private xUserId: string | null = null;
    private deviceId: string | null = null;
    private installationId: string | null = null;

    private expiresIn: number | null = null;

    private xRequestIdCode: string | null = null;
    private tokenCode: string | null = null;

    private headers: SMHeaders;

    private bonusCount: number | null = null;
    private qrCode: string | null = null;
    //где используется?? цвет карты
    private privatePersonType: string | null = null;

    private emailOwner: string | null = null;
    private itemsCart: Array<any> | null = null;
    private rawItemsCart: Array<any> | null = null;

    private amountThreeDays: number | null = null;
    private promocodes: Array<string> | null = null;

    // constructor(readonly proxy: string) {}

    setAccountValues({ accessToken, refreshToken, xUserId, deviceId, installationId, expiresIn }): void {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.xUserId = xUserId;
        this.deviceId = deviceId;
        this.installationId = installationId;
        this.expiresIn = expiresIn;
    }

    // setHeaders():
    // this.headers: Headers = {
    //     "User-Agent": "android-4.17.0-google(33755)",
    //     "Locale": "ru",
    //     "Country": "RU",
    //     "Device-Id": self.device_id,
    //     "Installation-Id": self.installation_id,
    //     "City-Id": f"{self.city_id}",
    //     "Eutc": "UTC+3",
    //     "x-user-id": f"{self.x_user_id}",
    //     "Authorization": self.access_token,
    //     "Host": "mp4x-api.sportmaster.ru",
    //     "Connection": "Keep-Alive",
    //     "Accept-Encoding": "gzip, deflate",
    //     "Content-Type": "application/json; charset=utf-8"
    // }

    setCity({ cityId, cityName }): void {
        this.cityId = cityId;
        this.cityName = cityName;
        // self.set_headers()
    }

    isRefreshDate(): boolean {
        if (!!this.expiresIn) {
            return false;
        }
        const currentTimeTimestamp = new Date().getTime();
        const timeDifference = currentTimeTimestamp - this.expiresIn;
        if (timeDifference > 1800) {
            return true;
        }
        return false;
    }

    // async refresh(): IRefreshOutput {
    //     const httpsAgent = new SocksProxyAgent('socks5://MEwluo:Ljeic0GMlo@212.115.49.112:5501');

    //     const url = 'https://mp4x-api.sportmaster.ru/api/v1/auth/refresh';
    //     const payload = {
    //         refreshToken: this.refreshToken,
    //         deviceId: this.deviceId,
    //     };

    //     const response = await axios.post(url, payload, {
    //         headers: this.headers,
    //         httpsAgent: httpsAgent,
    //     });
    // }

    async shortInfo(): Promise<any> {
        const httpsAgent = new SocksProxyAgent('socks5://MEwluo:Ljeic0GMlo@212.115.49.112:5501');

        const url = 'https://mp4x-api.sportmaster.ru/api/v2/bonus/shortInfo';

        const headers = {
            'User-Agent': 'android-4.17.0-google(33755)',
            Locale: 'ru',
            Country: 'RU',
            'Device-Id': '34ca3891-5ab9-4741-a715-7b9e675029a5',
            'Installation-Id': '798D6E4E-DFC9-4F00-A552-D41A402C5349',
            'City-Id': '1720920299',
            Eutc: 'UTC+3',
            'x-user-id': '100000008122942110',
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.GQiNnxP-Lyl9y5W7iieGyf27jMD0vDDuCvTLXbvt3m2poih9Tn_dlvHr2QBtKaN2Gt99DrOboWJAdheeUDgcp79pCBqXSjEqNlwqCi4DGoeFGxTwESkFsmkf7SfcfVDo_-rA4FGmO0X40QJC9KJSDI5vHxGa1bbm0KHtSUt8CuDIQ_xkOcXOkrV90yysPKbt5W6vKRx0bwSmFArhXx4-a0lj88c2bkWlVA2WUpZnjAT4L80s2BlscMjrno9Hrbi15kg1LhBMwoJKMjKLmIqrrUi9qCN8RuE4W48Cc89caQK0hInTZ5FgE96_tr2MExKcLSG8uvZ2c_JN2YT-AbBlGw.4PrSyHjabIzVzMfO.UaGiNfaM5Hn2d5LR_fs22ZtDHBu2oGi8Af4V-akHqArym3-SE9fWNBEp5LevIILWOg8tksS9wAHhf-m6x8V39uoB8fDdUrUab7S7ZHguqjlaJicXw1BHT530qbW32I8mw_NS9P5jV6-q2TOmVGqXmJx9uwUCcD6E5_1Zd6Z5RCbRZ-15N3wLXyI9BH6XxhsJ9nYUYdPcH24UHxYoxngrh1kvqKJqBY2Xy4c-zA4g_VnRLv8LgyxEkOIcA7WC48oT7IJiESbHx6qKRbpCO_biy4SR7kmaOhOjrh-MchCt46_L9zc3lXqkwtcQ229HMrdrlfnEAO5jd9NHy2Ukdg__mKMCkUJm69XHx53xY5HmXk4LzREtDn1TkBwzTso_Z2_l8eUq_28Nkz-s_RHqtThTUtqKaqdvodlmwA.q03jMxXFk5WTAW6CBl3sbA',
            Host: 'mp4x-api.sportmaster.ru',
            Connection: 'Keep-Alive',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json; charset=utf-8',
        };

        const response = await axios.get(url, {
            headers: headers,
            httpsAgent: httpsAgent,
        });

        if (response.status === 200) {
            this.bonusCount = response.data.info.totalAmount;
            this.qrCode = response.data.info.clubCard.qrCode;
            this.privatePersonType = response.data.info.privatePersonType.value;
        }

        return response.status;
    }
}

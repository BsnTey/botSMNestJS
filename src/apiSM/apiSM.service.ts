import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { IAccountInputApi, IItemListCart, IRefreshAccount } from 'src/common/interfaces/apiSM/apiSM.interface';
import { getCurrentTimestamp } from 'src/common/utils/date';
import { parsingListCart } from 'src/common/utils/transformRespBody';

export class ApiSM {
    public accountId: string | null = null;
    private httpsAgent = null;
    private proxy: string | null = null;
    private cityId = '1720920299';
    public cityName = 'Москва';
    private accessToken: string | null = null;
    private refreshToken: string | null = null;
    private xUserId: string | null = null;
    private deviceId: string | null = null;
    private installationId: string | null = null;

    private expiresIn: number | null = null;

    private xRequestIdCode: string | null = null;
    private tokenCode: string | null = null;

    private headers;

    public bonusCount: number | null = null;
    private qrCode: string | null = null;
    //где используется?? цвет карты
    private privatePersonType: string | null = null;

    private emailOwner: string | null = null;
    public itemsCart: Array<IItemListCart> | null = null;
    public rawItemsCart: Array<any> | null = null;

    public amountThreeDays: number | null = null;
    public promocodes: Array<string> | null = null;

    constructor(account: IAccountInputApi) {
        this.accountId = account.accountId;
        this.accessToken = account.accessToken;
        this.refreshToken = account.refreshToken;
        this.xUserId = account.xUserId;
        this.deviceId = account.deviceId;
        this.installationId = account.installationId;
        this.expiresIn = account.expiresIn;

        this.setHeaders();
    }

    setProxy(proxy: string) {
        this.proxy = proxy;
        this.httpsAgent = new SocksProxyAgent(proxy);
    }

    setHeaders(): void {
        this.headers = {
            'User-Agent': 'android-4.17.0-google(33755)',
            Locale: 'ru',
            Country: 'RU',
            'Device-Id': this.deviceId,
            'Installation-Id': this.deviceId,
            'City-Id': this.cityId,
            Eutc: 'UTC+3',
            'x-user-id': this.xUserId,
            Authorization: this.accessToken,
            Host: 'mp4x-api.sportmaster.ru',
            Connection: 'Keep-Alive',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json; charset=utf-8',
        };
    }

    setCity({ cityId, cityName }): void {
        this.cityId = cityId;
        this.cityName = cityName;
        this.setHeaders();
    }

    isRefreshDate(): boolean {
        if (!this.expiresIn) {
            return true;
        }
        const currentTimeTimestamp = getCurrentTimestamp();
        const timeDifference = this.expiresIn - currentTimeTimestamp;
        if (timeDifference < 1800) {
            return true;
        }
        return false;
    }

    async refresh(): Promise<IRefreshAccount> | null {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/auth/refresh';

        const payload = {
            refreshToken: this.refreshToken,
            deviceId: this.deviceId,
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            this.accessToken = response.data.data.token.accessToken;
            this.refreshToken = response.data.data.token.refreshToken;
            const expires = response.data.data.token.expiresIn;

            const currentTimeTimestamp = getCurrentTimestamp();
            this.expiresIn = expires + currentTimeTimestamp;

            this.setHeaders();

            return {
                accessToken: this.accessToken,
                refreshToken: this.refreshToken,
                expiresIn: this.expiresIn,
            };
        } catch {
            return null;
        }
    }

    async shortInfo(): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v2/bonus/shortInfo';

        try {
            const response = await axios.get(url, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            this.bonusCount = response.data.data.info.totalAmount;
            this.qrCode = response.data.data.info.clubCard.qrCode;
            this.privatePersonType = response.data.data.info.privatePersonType.value;

            return false;
        } catch {
            return true;
        }
    }

    async isRefresh(): Promise<boolean> {
        const isRefresh = await this.shortInfo();
        return isRefresh;
    }

    async getListCart(): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart';
        const params = { clearDeletedLines: true, cartResponse: 'FULL' };
        try {
            const response = await axios.get(url, {
                headers: this.headers,
                params: params,
                httpsAgent: this.httpsAgent,
            });

            this.itemsCart = parsingListCart(response.data);
            this.rawItemsCart = response.data;

            return true;
        } catch {
            return false;
        }
    }
}

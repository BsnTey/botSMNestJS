import axios from 'axios';
import qs from 'qs';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { IAccountInputApi, IItemListCart, IRefreshAccount } from 'src/common/interfaces/apiSM/apiSM.interface';
import { getCurrentTimestamp, refactorItemsCart } from 'src/common/utils/some.utils';
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
    public rawListDetailsBonus: Array<any> | null = null;

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

    setCity(cityId, cityName): void {
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

            return true;
        } catch {
            return false;
        }
    }

    async detailsBonus(): Promise<boolean> {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        const url = `https://mp4x-api.sportmaster.ru/api/v1/bonus/detailsByDay?dateBegin=${formattedDate}&dateEnd=2024-02-28`;

        try {
            const response = await axios.get(url, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            this.rawListDetailsBonus = response.data.data.list;
            this.bonusCount = this.rawListDetailsBonus[0].amount;

            return true;
        } catch {
            return false;
        }
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

    async searchProduct(article: string): Promise<any> | null {
        const url = 'https://mp4x-api.sportmaster.ru/api/v2/products/search?limit=50&offset=0';

        const payload = { queryText: article, persGateTags: ['A_search', 'auth_login_call'] };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            const data = response.data.data.list[0];
            return data;
        } catch {
            return null;
        }
    }

    async addItemCart(productId: string, sku: string): Promise<any> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/add';

        const payload = {
            id: {
                productId: productId,
                sku: sku,
            },
            quantity: 1,
            cartFormat: 'LITE',
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return response.data;
        } catch {
            return false;
        }
    }

    async findCity(city: string): Promise<any> {
        const url = `https://mp4x-api.sportmaster.ru/api/v1/city?query=${city}`;
        const encodedUrl = encodeURI(url);

        let foundCities = [];
        try {
            const response = await axios.get(encodedUrl, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            foundCities = response.data.data.list;
        } catch {
            // skip
        }
        return foundCities;
    }

    async applySnapshot(snapshotUrl: string): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/add';

        const payload = {
            snapshotUrl: snapshotUrl,
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return true;
        } catch {
            return false;
        }
    }

    async createSnapshot(): Promise<string> | null {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/createSnapshot';

        try {
            const response = await axios.post(
                url,
                {},
                {
                    headers: this.headers,
                    httpsAgent: this.httpsAgent,
                },
            );

            return response.data.data.snapshotUrl;
        } catch {
            return null;
        }
    }

    async removeItemFromCart(removeList: IItemListCart[]): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/remove';
        const ids = removeList.map((item: IItemListCart) => {
            return {
                productId: item.productId,
                sku: item.sku,
            };
        });

        const payload = {
            ids: ids,
            cartFormat: 'FULL',
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return true;
        } catch {
            return false;
        }
    }

    async addPromocode(promocode: string): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/promoCode';

        const payload = {
            promoCode: promocode,
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return true;
        } catch {
            return false;
        }
    }

    async deletePromocode(promocode: string): Promise<boolean> {
        const url = 'https://mp4x-api.sportmaster.ru/api/v1/cart/promoCode';

        try {
            const response = await axios.delete(url, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return true;
        } catch {
            return false;
        }
    }

    async internalPickupAvailability(): Promise<any> {
        const preparingCartItem = refactorItemsCart(this.itemsCart);

        const url = 'https://mp4x-api.sportmaster.ru/api/v2/cart/internalPickupAvailability';

        const payload = {
            cartItemIds: preparingCartItem,
        };

        try {
            const response = await axios.post(url, payload, {
                headers: this.headers,
                httpsAgent: this.httpsAgent,
            });

            return response.data.data.list;
        } catch (err) {
            throw new Error(err.data);
        }
    }
}

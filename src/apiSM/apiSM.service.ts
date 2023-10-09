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

    private headers: Record<string, string> | null = null;

    private bonusCount: number | null = null;
    private qrCode: string | null = null;
    private privatePersonType: string | null = null;

    private emailOwner: string | null = null;
    private itemsCart: Array<any> | null = null;
    private rawItemsCart: Array<any> | null = null;

    private amountThreeDays: number | null = null;
    private promocodes: Array<string> | null = null;

    constructor(readonly proxy: string) {}

    setAccountValues({ accessToken, refreshToken, xUserId, deviceId, installationId, expiresIn }): void {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.xUserId = xUserId;
        this.deviceId = deviceId;
        this.installationId = installationId;
        this.expiresIn = expiresIn;
    }

    // setHeaders():
    // this.headers = {
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

    refresh(): IRefreshOutput {}
}

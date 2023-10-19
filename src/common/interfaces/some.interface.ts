export interface IProxyDict {
    [proxyUrl: string]: IProxy;
}

export interface IProxy {
    isBan: boolean;
    timeBlock: Date;
}

export interface IFavouriteCitiesGetBD {
    cityId: string;
    city: {
        name: string;
        fullName: string;
    };
}

export interface IFavouriteCities {
    id: string;
    name: string;
    fullName: string;
}

export interface IOututBonusDate {
    amount: number;
    date: string;
}

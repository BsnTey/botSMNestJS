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
    };
}

export interface IFavouriteCities {
    id: string;
    name: string;
}

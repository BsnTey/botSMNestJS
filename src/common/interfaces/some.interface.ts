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

export type ShopType = {
    shop: {
        shopNumber: string;
        name: string;
        address: string;
    };
    availability: string;
};

export type ShopAddressType = {
    [key: string]: {
        shopAddress: string;
        name: string;
        availability: string;
    };
};

interface TotalSum {
    value: number;
    currency: string;
}

interface Status {
    status: string;
    statusText: string;
    statusDate: string | null;
    textColor: string;
    backgroundColor: string;
}

interface DeliveryType {
    title: string;
    value: string;
}

export interface Order {
    number: string;
    receiptCode: string | null;
    date: string;
    status: Status;
    totalSum: TotalSum;
    deliveryType: DeliveryType;
    showQrCode: boolean;
}

export interface IAccountInputApi {
    accountId: string;
    accessToken: string;
    refreshToken: string;
    xUserId: string;
    deviceId: string;
    installationId: string;
    expiresIn: number;
}

export interface IRefreshAccount {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface RawListCart {
    data: {
        cartFull: {
            unallocatedItems: any[];
            obtainPoints?: any[];
            soldOutLines?: any[];
        };
    };
}

export interface IItemListCart {
    productId: string;
    sku: string;
    name?: string;
}

export type TypeRefreshBy = 'shortInfo' | 'detailsBonus' | 'promocode';

export interface IRecipientOrder {
    firstName: string;
    lastName: string;
    nationalNumber: string;
    email: string;
}

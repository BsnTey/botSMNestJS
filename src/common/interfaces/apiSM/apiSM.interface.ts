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

type NonUndefined<T, E = undefined> = Pick<
    T,
    {
        [Prop in keyof T]: T[Prop] extends E ? never : Prop;
    }[keyof T]
>;

export type SMHeaders = NonUndefined<Headers>;

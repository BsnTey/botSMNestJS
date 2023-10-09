import { AxiosRequestHeaders } from 'axios';

export interface IRefreshOutput {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface Headers extends AxiosRequestHeaders {
    'User-Agent': string;
    Locale: string;
    Country: string;
    'Device-Id': string;
    'Installation-Id': string;
    'City-Id': string;
    Eutc: string;
    'x-user-id': string;
    Authorization: string;
    Host: string;
    Connection: string;
    'Accept-Encoding': string;
    'Content-Type': string;
}
type NonUndefined<T, E = undefined> = Pick<
    T,
    {
        [Prop in keyof T]: T[Prop] extends E ? never : Prop;
    }[keyof T]
>;

export type SMHeaders = NonUndefined<Headers>;

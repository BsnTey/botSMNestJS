import { Context } from 'telegraf';

interface SessionData {
    [key: string]: any;
}

export interface MyContext extends Context {
    session?: SessionData;
}

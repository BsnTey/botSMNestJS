import { session } from 'telegraf';

export const sessionMiddleware = session({
    defaultSession: () => ({
        api: null,
        userInfo: null,
    }),
});

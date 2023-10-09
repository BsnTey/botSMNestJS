import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/session.middleware';
import { BaseModule } from './base/base.module';
import { botName, telegramApi } from './common/dotenv';

@Module({
    imports: [
        // TelegrafModule.forRoot({
        //     token: process.env.TELEGRAM_API,
        //     middlewares: [sessionMiddleware],
        //     include: [],
        // }),
        TelegrafModule.forRootAsync({
            botName: botName,
            useFactory: () => ({
                token: telegramApi,
                middlewares: [sessionMiddleware],
                include: [],
            }),
        }),
        BaseModule,
    ],
})
export class AppModule {}

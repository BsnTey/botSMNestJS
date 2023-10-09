import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/session.middleware';
import { BaseModule } from './base/base.module';
import { botName, telegramApi } from './common/dotenv';
import { OrderModule } from './order/order.module';

@Module({
    imports: [
        TelegrafModule.forRootAsync({
            botName: botName,
            useFactory: () => ({
                token: telegramApi,
                middlewares: [sessionMiddleware],
                include: [],
            }),
        }),
        BaseModule,
        OrderModule,
    ],
})
export class AppModule {}

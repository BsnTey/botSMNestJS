import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/session.middleware';
import { BaseModule } from './base/base.module';
import { botName, telegramApi } from './common/dotenv';
import { OrderModule } from './order/order.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/user.module';
// import { AccountsModule } from './accounts/account.module';
import { ProxyModule } from './proxy/proxy.module';
import { TelegrafExceptionFilter } from './common/filters/telegraf-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { CheckingModule } from './checking/checking.module';
import { ChangeNumberModule } from './change-number/change-number.module';
import { CookieModule } from './cookie/cookie.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { CalculateModule } from './calculate/calculate.module';
import { ProfileModule } from './profile/profile.module';
import { EmailReceiptModule } from './email-receipt/email-receipt.module';

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
        DatabaseModule,
        UserModule,
        // AccountsModule,
        ProxyModule,
        CheckingModule,
        ChangeNumberModule,
        CookieModule,
        QrCodeModule,
        CalculateModule,
        ProfileModule,
        EmailReceiptModule
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: TelegrafExceptionFilter,
        },
    ],
})
export class AppModule {}

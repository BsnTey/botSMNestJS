import { Module } from '@nestjs/common';
import {
    OrderCity,
    OrderFavouriteCity,
    OrderInputArticle,
    OrderInputLink,
    OrderMenuAccount,
    OrderMenuCart,
    OrderUpdate,
    OrderInputPromo,
    OrderGetOrders,
    OrderChangeRecipient
} from './order.update';
import { OrderService } from './order.service';
import { AccountModule } from 'src/accounts/account.module';
import { ProxyModule } from 'src/proxy/proxy.module';
import { UserModule } from 'src/users/user.module';
import { BaseModule } from 'src/base/base.module';

@Module({
    imports: [BaseModule, AccountModule, ProxyModule, UserModule],
    providers: [
        OrderUpdate,
        OrderService,
        OrderInputArticle,
        OrderMenuCart,
        OrderMenuAccount,
        OrderCity,
        OrderFavouriteCity,
        OrderInputLink,
        OrderInputPromo,
        OrderGetOrders,
        OrderChangeRecipient
    ],
})
export class OrderModule {}

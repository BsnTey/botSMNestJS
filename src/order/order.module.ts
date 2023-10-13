import { Module } from '@nestjs/common';
import { OrderInputArticle, OrderUpdate } from './order.update';
import { OrderService } from './order.service';
import { AccountService } from 'src/accounts/account.service';
import { ProxyService } from 'src/proxy/proxy.service';
import { BaseService } from 'src/base/base.service';
import { UserRepository } from 'src/users/repository/user.repository';
import { AccountRepository } from 'src/accounts/repository/account.repository';
import { AccountModule } from 'src/accounts/account.module';
import { ProxyModule } from 'src/proxy/proxy.module';
import { UserModule } from 'src/users/user.module';
import { BaseModule } from 'src/base/base.module';

@Module({
    imports: [BaseModule, AccountModule, ProxyModule, UserModule],
    providers: [OrderUpdate, OrderService, OrderInputArticle],
})
export class OrderModule {}

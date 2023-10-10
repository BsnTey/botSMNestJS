import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OrderUpdate } from './order.update';
import { OrderService } from './order.service';
import { GetUserMiddleware } from 'src/middleware/getUser.middleware';
import { UserModule } from 'src/users/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from 'src/users/repository/user.repository';

@Module({
    imports: [DatabaseModule],
    providers: [OrderUpdate, OrderService, UserRepository],

})
export class OrderModule  {}

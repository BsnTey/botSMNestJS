import { Module } from '@nestjs/common';
import { OrderUpdate } from './order.update';

@Module({
    providers: [OrderUpdate],
})
export class OrderModule {}

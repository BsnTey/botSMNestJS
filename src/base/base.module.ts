import { Module } from '@nestjs/common';
import { BaseUpdate } from './base.update';

@Module({
    providers: [BaseUpdate],
})
export class BaseModule {}

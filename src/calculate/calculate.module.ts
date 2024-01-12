import { Module } from '@nestjs/common';
import { CalculateUpdate } from './calculate.update';

@Module({
    providers: [CalculateUpdate],
})
export class CalculateModule {}

import { Module } from '@nestjs/common';
import { CheckingService } from './checking.service';
import { CheckingUpdate } from './checking.update';

@Module({
    providers: [CheckingService],
    controllers: [CheckingUpdate],
})
export class CheckingModule {}

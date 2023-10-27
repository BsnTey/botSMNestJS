import { Module } from '@nestjs/common';
import { ChangeNumberService } from './change-number.service';
import { ChangeNumberInputCode, ChangeNumberInputNumber, ChangeNumberUpdate } from './change-number.update';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [ChangeNumberUpdate, ChangeNumberService, ChangeNumberInputNumber, ChangeNumberInputCode],
})
export class ChangeNumberModule {}

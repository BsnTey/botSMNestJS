import { Module } from '@nestjs/common';
import { CheckingService } from './checking.service';
import { CheckingUpdate } from './checking.update';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [CheckingUpdate, CheckingService],
})
export class CheckingModule {}

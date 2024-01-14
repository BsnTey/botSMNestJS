import { Module } from '@nestjs/common';
import { EmailReceiptUpdate } from './email-receipt.update';
import { EmailReceiptService } from './email-receipt.service';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [EmailReceiptUpdate, EmailReceiptService],
})
export class EmailReceiptModule {}

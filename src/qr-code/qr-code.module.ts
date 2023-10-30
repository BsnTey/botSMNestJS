import { Module } from '@nestjs/common';
import { QrCodeUpdate } from './qr-code.update';
import { QrCodeService } from './qr-code.service';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [QrCodeUpdate, QrCodeService],
})
export class QrCodeModule {}

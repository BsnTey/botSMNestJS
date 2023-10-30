import { Module } from '@nestjs/common';
import { CookieService } from './cookie.service';
import { CookieUpdate } from './cookie.update';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [CookieUpdate, CookieService],
})
export class CookieModule {}

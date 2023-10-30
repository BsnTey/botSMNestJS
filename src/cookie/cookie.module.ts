import { Module } from '@nestjs/common';
import { CookieUpdate } from './cookie.update';
import { AccountModule } from 'src/accounts/account.module';

@Module({
    imports: [AccountModule],
    providers: [CookieUpdate],
})
export class CookieModule {}

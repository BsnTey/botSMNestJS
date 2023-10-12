import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { PrismaService } from 'src/database/prisma.service';
import { AccountRepository } from './repository/account.repository';
import { ProxyModule } from 'src/proxy/proxy.module';

@Module({
    imports: [ProxyModule],
    providers: [AccountService, PrismaService, AccountRepository],
    exports: [AccountService],
})
export class AccountModule {}

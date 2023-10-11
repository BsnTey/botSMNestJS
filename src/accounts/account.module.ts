import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { PrismaService } from 'src/database/prisma.service';
import { AccountRepository } from './repository/account.repository';

@Module({
    providers: [AccountService, PrismaService, AccountRepository],
    exports: [AccountService, AccountRepository],
})
export class AccountModule {}

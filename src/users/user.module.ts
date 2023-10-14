import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './repository/user.repository';

@Module({
    providers: [UserService, PrismaService, UserRepository],
    exports: [UserService],
})
export class UserModule {}

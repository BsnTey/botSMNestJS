import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async getUser(telegramId: string) {
        return await this.prisma.user.findUnique({
            where: { telegramId: telegramId },
        });
    }

    async createUser(user: ICreateUser) {
        return await this.prisma.user.create({
            data: user,
        });
    }
}

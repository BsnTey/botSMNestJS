import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';

@Injectable()
export class AccountRepository {
    constructor(private prisma: PrismaService) {}

    async getAccount(accountId: string) {
        return await this.prisma.account.findUnique({
            where: { accountId: accountId },
            select: {
                accessToken: true,
                refreshToken: true,
                xUserId: true,
                deviceId: true,
                installationId: true,
                expiresIn: true,
            },
        });
    }


}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';
import { IRefreshAccount } from 'src/common/interfaces/apiSM/apiSM.interface';

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

    async getAccountCookie(accountId: string) {
        return await this.prisma.account.findUnique({
            where: { accountId: accountId },
            select: {
                cookie: true,
                isOnlyAccessOrder: true,
            },
        });
    }

    async updateTokensAccount(accountId: string, { accessToken, refreshToken, expiresIn }: IRefreshAccount) {
        return await this.prisma.account.update({
            where: {
                accountId: accountId,
            },
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                expiresIn: expiresIn,
            },
        });
    }

    async setBanMp(accountId: string) {
        return await this.prisma.account.update({
            where: {
                accountId: accountId,
            },
            data: {
                isAccessMp: false,
            },
        });
    }
}

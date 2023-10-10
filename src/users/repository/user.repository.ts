import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async getUser(telegramId: string) {
        return await this.prisma.user.findUnique({
            where: { telegramId: telegramId },
            select: {
                telegramName: true,
                countBonuses: true,
                isBan: true,
            },
        });
    }

    async createUser(user: ICreateUser) {
        return await this.prisma.user.create({
            data: {
                telegramId: user.telegramId,
                telegramName: user.telegramName,
            },
            include: {
                userCities: true,
            },
        });
    }

    async getUserWithCitys(telegramId: string) {
        return await this.prisma.user.findUnique({
            where: { telegramId: telegramId },
            select: {
                telegramName: true,
                countBonuses: true,
                isBan: true,
                userCities: {
                    select: {
                        cityId: true,
                        city: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    }
}

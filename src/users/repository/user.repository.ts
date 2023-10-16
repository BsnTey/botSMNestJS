import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';
import { IFavouriteCities } from 'src/common/interfaces/some.interface';

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
                                fullName: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async createCity({ id, name, fullName }: IFavouriteCities) {
        return await this.prisma.citySM.upsert({
            where: { cityId: id },
            update: {},
            create: {
                cityId: id,
                name: name,
                fullName: fullName,
            },
        });
    }

    async linkCityUser(telegramId: string, cityId: string) {
        return await this.prisma.userCitySM.create({
            data: {
                userId: telegramId,
                cityId: cityId,
            },
        });
    }
}

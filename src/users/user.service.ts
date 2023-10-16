import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';
import { IFavouriteCities } from 'src/common/interfaces/some.interface';

@Injectable()
export class UserService {
    constructor(private userRep: UserRepository) {}

    async GetOrCreateUser({ telegramId, telegramName }: ICreateUser) {
        let user = await this.userRep.getUser(telegramId);
        if (!user) {
            user = await this.userRep.createUser({ telegramId, telegramName });
        }
        return user;
    }

    async GetUserWithCitys(telegramId: string) {
        const user = await this.userRep.getUserWithCitys(telegramId);
        return user;
    }

    async createUserCity(telegramId: string, city: IFavouriteCities) {
        const newCity = await this.userRep.createCity(city);
        const link = await this.userRep.linkCityUser(telegramId, city.id);
        return 'cityId' in link ? true : false;
    }

    async delUserCity(telegramId: string, cityId: string) {
        const delCity = await this.userRep.delCityUser(telegramId, cityId);
        return 'cityId' in delCity ? true : false;
    }
}

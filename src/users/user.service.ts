import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';

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
}

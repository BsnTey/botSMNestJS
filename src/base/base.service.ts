import { Injectable } from '@nestjs/common';
import { ICreateUser } from 'src/common/interfaces/user/user.interface';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from 'src/users/repository/user.repository';

@Injectable()
export class BaseService {
    constructor(private userRep: UserRepository) {}

    async onStart({ telegramId, telegramName}: ICreateUser) {
        let user = await this.userRep.getUser(telegramId);
        if (!user) {
            user = await this.userRep.createUser({ telegramId, telegramName });
        }
        return user;
    }
}

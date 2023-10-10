import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/repository/user.repository';

@Injectable()
export class OrderService {
    constructor(private userRep: UserRepository) {}

    // async onStartOrder(telegramId: string) {
    //     const user = await this.userRep.getUserWithCitys(telegramId);
    //     return user;
    // }
}

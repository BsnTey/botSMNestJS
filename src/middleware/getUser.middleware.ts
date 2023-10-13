// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import { Ctx, Sender } from 'nestjs-telegraf';
// import { Context } from 'src/common/interfaces/context.interface';
// import { UserRepository } from 'src/users/repository/user.repository';

// @Injectable()
// export class GetUserMiddleware implements NestMiddleware {
// constructor(private userRep: UserRepository) {
// }

//     async use(@Ctx() ctx: Context, @Sender() telegramUser: any, next: NextFunction) {
//         const { id: telegramId } = telegramUser;
//         console.log(telegramId);

//         next();
//     }
// }

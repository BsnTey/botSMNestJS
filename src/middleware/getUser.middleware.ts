// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import { Ctx, Sender } from 'nestjs-telegraf';
// import { MyContext } from 'src/common/interfaces/context.interface';
// import { UserRepository } from 'src/users/repository/user.repository';
// import { MiddlewareFn } from 'telegraf';

// @Injectable()
// export class GetUserMiddleware implements NestMiddleware {
//     constructor(private userRep: UserRepository) {
//     }

//     async use(@Ctx() ctx: MyContext, @Sender() telegramUser: any, next: NextFunction) {
//         const { id: telegramId } = telegramUser;
//         let user = await this.userRep.getUser(telegramId);
//         next();
//     }
// }

// export function getUserMiddleware(): MiddlewareFn<any> {
//   return async (ctx: MyContext, next: NextFunction) => {
//     console.log('Request...');
//     return next();
//   };
// }

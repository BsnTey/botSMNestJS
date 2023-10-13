import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { TelegrafExecutionContext, TelegrafException } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { adminId } from '../dotenv';

@Injectable()
export class AdminGuard implements CanActivate {
    private readonly ADMIN_IDS = [adminId];

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = TelegrafExecutionContext.create(context);
        const { from } = ctx.getContext<Context>();

        const isAdmin = this.ADMIN_IDS.includes(from.id);
        if (!isAdmin) {
            throw new TelegrafException('You are not admin 😡');
        }

        return true;
    }
}

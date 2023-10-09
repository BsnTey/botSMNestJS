import { Command, Ctx, Hears, Start, Update, Sender, Message, On } from 'nestjs-telegraf';
import { MyContext } from 'src/common/interfaces/context.interface';
import { Context } from 'telegraf';
import { getMainMenu } from '../common/keyboards/reply.keyboard';

@Update()
export class OrderUpdate {
    @Hears(['🛒 Сделать заказ'])
    async onStartOrder(@Ctx() ctx: MyContext) {
        ctx.session.api = null;

        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }
}

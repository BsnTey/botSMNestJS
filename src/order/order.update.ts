import { Command, Ctx, Hears, Start, Update, Sender, Message, On } from 'nestjs-telegraf';
import { MyContext } from 'src/common/interfaces/context.interface';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { OrderService } from './order.service';

@Update()
export class OrderUpdate {
    constructor(private orderService: OrderService) {}

    @Hears(['🛒 Сделать заказ'])
    async onStartOrder(@Ctx() ctx: MyContext) {
        ctx.session.api = null;

        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }
}

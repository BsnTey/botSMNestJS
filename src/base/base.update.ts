import { UseGuards } from '@nestjs/common';
import { Command, Ctx, Hears, Start, Update, Sender, Message, On } from 'nestjs-telegraf';
import { ApiSMService } from 'src/apiSM/apiSM.service';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { MyContext } from 'src/common/interfaces/context.interface';
import { Context } from 'telegraf';
import { BaseService } from './base.service';

@Update()
export class BaseUpdate {
    constructor(private baseService: BaseService) {}

    @Start()
    async onStart(@Ctx() ctx: Context, @Sender() telegramUser: any) {
        const { first_name: telegramName, id: telegramId } = telegramUser;

        await this.baseService.onStart({
            telegramName,
            telegramId: String(telegramId),
        });

        await ctx.replyWithPhoto(
            'https://cstor.nn2.ru/forum/data/forum/images/2018-04/203019686-3f3b88013d6894fa103d7e79121a346a.jpg',
            { caption: `Добро пожаловать в меню, ${telegramName}!\n\nЧто вас интересует?` },
        );
    }

    @Command('admin')
    @UseGuards(AdminGuard)
    async onAdminCommand(@Ctx() ctx: Context) {
        const api = new ApiSMService();
        const test = await api.shortInfo();

        // await ctx.reply('admin');
    }

    @Command('test')
    async onTest(@Ctx() ctx: MyContext) {
        await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
    }
}

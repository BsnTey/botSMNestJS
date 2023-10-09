import { UseGuards } from '@nestjs/common';
import { Command, Ctx, Hears, Start, Update, Sender, Message, On } from 'nestjs-telegraf';
import { ApiSMService } from 'src/apiSM/apiSM.service';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { MyContext } from 'src/common/interfaces/context.interface';
import { Context } from 'telegraf';

@Update()
export class BaseUpdate {
    @Start()
    async onStart(@Ctx() ctx: Context, @Sender('first_name') firstName: string) {
        await ctx.replyWithPhoto(
            'https://cstor.nn2.ru/forum/data/forum/images/2018-04/203019686-3f3b88013d6894fa103d7e79121a346a.jpg',
            { caption: `Добро пожаловать в меню, ${firstName}!\n\nЧто вас интересует?` },
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

    @Command('testadd')
    async onTestAdd(@Ctx() ctx: MyContext) {
        ctx.session.messageCount++;
        await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
    }
    @Command('testclear')
    async onTestClear(@Ctx() ctx: MyContext) {
        ctx.session.messageCount = 0;
        await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
    }

    @Command('testinput')
    async onTestInput(@Ctx() ctx: MyContext) {
        ctx.session.test = 228;
    }

    @Command('testoutput')
    async onTestOut(@Ctx() ctx: MyContext) {
        await ctx.reply(`Seen ${ctx.session.test} messages.`);
    }
}

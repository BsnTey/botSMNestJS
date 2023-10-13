import { UseGuards } from '@nestjs/common';
import { Command, Ctx, Hears, Start, Update, Sender, Message, On } from 'nestjs-telegraf';
// import { ApiSMService } from 'src/apiSM/apiSM.service';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { Context } from 'src/common/interfaces/context.interface';
import { BaseService } from './base.service';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { WizardContext } from 'telegraf/typings/scenes';
import { ProxyService } from 'src/proxy/proxy.service';
import { MAKE_ORDER } from 'src/app.constants';

@Update()
export class BaseUpdate {
    constructor(private baseService: BaseService, private proxyService: ProxyService) {}

    @Start()
    async onStart(@Ctx() ctx: Context, @Sender() telegramUser: any) {
        const { first_name: telegramName, id: telegramId } = telegramUser;

        await this.baseService.GetOrCreateUser({
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
        await ctx.reply('admin');
    }

    @Hears(['🛒 Сделать заказ'])
    async onStartOrder(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        await ctx.scene.enter(MAKE_ORDER.scene);
    }
}

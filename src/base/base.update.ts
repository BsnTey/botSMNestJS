import { UseGuards } from '@nestjs/common';
import { Command, Ctx, Hears, Start, Update, Sender } from 'nestjs-telegraf';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { Context } from 'src/common/interfaces/context.interface';
import { WizardContext } from 'telegraf/typings/scenes';
import { CHANGE_NUMBER, CHECK, GET_CASH_RECEIPT, GET_COOKIE, GET_QR, HELP, MAKE_ORDER, PROFILE } from 'src/app.constants';
import { UserService } from 'src/users/user.service';
import { getMainMenu } from 'src/common/keyboards/reply.keyboard';

@Update()
export class BaseUpdate {
    constructor(private userService: UserService) {}

    @Start()
    async onStart(@Ctx() ctx: Context, @Sender() telegramUser: any) {
        const { first_name: telegramName, id: telegramId } = telegramUser;

        await this.userService.GetOrCreateUser({
            telegramName,
            telegramId: String(telegramId),
        });

        const keyboard = getMainMenu();

        await ctx.replyWithPhoto(
            'https://cstor.nn2.ru/forum/data/forum/images/2018-04/203019686-3f3b88013d6894fa103d7e79121a346a.jpg',
            { caption: `Добро пожаловать в меню, ${telegramName}!\n\nЧто вас интересует?`, ...keyboard },
        );
    }

    @Command('admin')
    @UseGuards(AdminGuard)
    async onAdminCommand(@Ctx() ctx: Context) {
        await ctx.reply('admin');
    }

    @Hears(['📱 Смена номера'])
    async onStartChangeNumber(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(CHANGE_NUMBER.scene);
    }

    @Hears(['🛒 Сделать заказ'])
    async onStartOrder(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(MAKE_ORDER.scene);
    }

    @Hears(['♻️ Чекер'])
    async onStartChecking(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(CHECK.scene);
    }

    @Hears(['🔑 Выдать Cookie'])
    async onStartCookie(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_COOKIE.scene);
    }

    @Hears(['🪪 Выдать QR_Code'])
    async onStartQrCode(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_QR.scene);
    }

    @Hears(['✉️ Выдать Кассовый чек'])
    async onStartCashReceipt(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_CASH_RECEIPT.scene);
    }

    @Hears(['🏠️ Личный кабинет'])
    async onStartProfile(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(PROFILE.scene);
    }

    @Hears(['📞 Поддержка'])
    async onStartHelp(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(HELP.scene);
    }
}

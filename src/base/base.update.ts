import { UseGuards } from '@nestjs/common';
import { Ctx, Hears, Update, Sender, Scene, SceneEnter } from 'nestjs-telegraf';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { Context } from 'src/common/interfaces/context.interface';
import { WizardContext } from 'telegraf/typings/scenes';
import { ADMIN, CALCULATE_BONUS, CHANGE_NUMBER, CHECK, GET_CASH_RECEIPT, GET_COOKIE, GET_QR, HELP, MAKE_ORDER, PROFILE, START } from 'src/app.constants';
import { UserService } from 'src/users/user.service';
import { getMainMenu } from 'src/common/keyboards/reply.keyboard';

@Update()
export class BaseUpdate {
    constructor(private userService: UserService) {}

    @Hears([START.name])
    async onStart(@Ctx() ctx: Context, @Sender() telegramUser: any) {
        await ctx.scene.enter(START.scene);
    }

    @Hears([ADMIN.name])
    @UseGuards(AdminGuard)
    async onAdminCommand(@Ctx() ctx: Context) {
        await ctx.reply('admin');
    }

    @Hears([CHANGE_NUMBER.name])
    async onStartChangeNumber(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(CHANGE_NUMBER.scene);
    }

    @Hears([MAKE_ORDER.name])
    async onStartOrder(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(MAKE_ORDER.scene);
    }

    @Hears([CHECK.name])
    async onStartChecking(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(CHECK.scene);
    }

    @Hears([GET_COOKIE.name])
    async onStartCookie(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_COOKIE.scene);
    }

    @Hears([GET_QR.name])
    async onStartQrCode(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_QR.scene);
    }

    @Hears([GET_CASH_RECEIPT.name])
    async onStartCashReceipt(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(GET_CASH_RECEIPT.scene);
    }

    @Hears([PROFILE.name])
    async onStartProfile(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(PROFILE.scene);
    }

    @Hears([HELP.name])
    async onStartHelp(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(HELP.scene);
    }

    @Hears([CALCULATE_BONUS.name])
    async onStartCalculate(@Ctx() ctx: WizardContext) {
        await ctx.scene.enter(CALCULATE_BONUS.scene);
    }
}

@Scene(START.scene)
export class StartUpdate {
    constructor(private userService: UserService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: Context, @Sender() telegramUser: any) {
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

        await ctx.scene.leave();
    }
}

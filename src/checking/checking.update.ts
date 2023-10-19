import { Ctx, Hears, On, Scene, SceneEnter } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { ALL_KEYS_MENU_BUTTON_NAME, CHECK } from 'src/app.constants';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { CheckingService } from './checking.service';

@Scene(CHECK.scene)
export class CheckingUpdate {
    constructor(private checkingService: CheckingService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.reply('Пришлите номера аккаунтов, каждый с новой строки', getMainMenu());
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputAccounts(@Ctx() ctx: WizardContext) {
        //@ts-ignore
        const accounts = ctx.message['text'].split('\n');
        await ctx.reply('Началась проверка');
        const checkedAccounts = await this.checkingService.checkingAccounts(accounts);
        await ctx.reply(checkedAccounts.join(''), getMainMenu());
    }
}

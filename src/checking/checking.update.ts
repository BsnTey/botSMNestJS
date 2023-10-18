import { Ctx, Hears, On, Scene, SceneEnter } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { ApiSM } from 'src/apiSM/apiSM.service';
import { AccountService } from 'src/accounts/account.service';
import {
    ALL_KEYS_MENU_BUTTON_NAME,
    CHECK,
} from 'src/app.constants';
import { getValueKeysMenu } from 'src/common/utils/some.utils';


@Scene(CHECK.scene)
export class CheckingUpdate {
    constructor(private accountService: AccountService) {}

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
        const accounts = ctx.match[0].split('\n');
        await ctx.reply('Началась проверка');

        

    }
}

import { Ctx, Hears, Sender, On, Scene, SceneEnter, TelegrafException, Action } from 'nestjs-telegraf';
import { ALL_KEYS_MENU_BUTTON_NAME, CHANGE_NUMBER, ERROR_PHONE_NUMBER, GOOD_SEND_PHONE_CODE, KNOWN_ERROR } from 'src/app.constants';
import { checkPhoneNumber, getValueKeysMenu } from 'src/common/utils/some.utils';
import { WizardContext } from 'telegraf/typings/scenes';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { AccountService } from 'src/accounts/account.service';
import { CHANGE_NUMBER_CODE_SCENE, CHANGE_NUMBER_INPUT_NUMBER_SCENE } from 'src/states/states';
import { ChangeNumberService } from './change-number.service';


@Scene(CHANGE_NUMBER.scene)
export class ChangeNumberUpdate {
    constructor(private accountService: AccountService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        ctx.session['api'] = null;
        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async findAccount(@Ctx() ctx: WizardContext) {
        const accountId = ctx.message['text'];

        try {
            const api = await this.accountService.getApi(accountId, 'shortInfo');
            ctx.session['api'] = api;
            await ctx.scene.enter(CHANGE_NUMBER_INPUT_NUMBER_SCENE);
        } catch (error) {
            if (KNOWN_ERROR.includes(error.message)) throw new TelegrafException(error.message);
            throw new TelegrafException(error);
        }
    }
}

@Scene(CHANGE_NUMBER_INPUT_NUMBER_SCENE)
export class ChangeNumberInputNumber {
    constructor(private changeNumberService: ChangeNumberService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        const text = `📱 Аккаунт найден. Баланс: ${api.bonusCount}.\nВведите номер телефона, на который хотите перепривязать его`;
        await ctx.reply(text);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputPhoneNumber(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        let phoneNumber = ctx.message['text'];

        const requestId = this.changeNumberService.sendSms(api, phoneNumber)
        ctx.session['requestId'] = requestId;

        await ctx.scene.enter(CHANGE_NUMBER_CODE_SCENE);
    }
}

@Scene(CHANGE_NUMBER_CODE_SCENE)
export class ChangeNumberInputCode {
    constructor() {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        await ctx.reply(GOOD_SEND_PHONE_CODE);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @On('text')
    async inputCodePhoneNumber(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        let phoneNumber = ctx.message['text'];

        const requestId = this.changeNumberService.sendSms(api, phoneNumber)
        ctx.session['requestId'] = requestId;

        await ctx.scene.enter(CHANGE_NUMBER_CODE_SCENE);
    }
}

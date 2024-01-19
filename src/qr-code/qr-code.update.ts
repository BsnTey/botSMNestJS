import { Action, Ctx, Hears, On, Scene, SceneEnter, TelegrafException } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { ALL_KEYS_MENU_BUTTON_NAME, GET_QR, KNOWN_ERROR } from 'src/app.constants';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { QrCodeService } from './qr-code.service';
import { AccountService } from 'src/accounts/account.service';
import { qrCodeUpdateKeyboard } from 'src/common/keyboards/inline.keyboard';

@Scene(GET_QR.scene)
export class QrCodeUpdate {
    constructor(private qrCodeService: QrCodeService, private accountService: AccountService) {}

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
            const qrCode = api.qrCode;

            ctx.session['api'] = api;

            const qrCodeBuff = await this.qrCodeService.generateQrCode(qrCode);
            const text = `📱 Аккаунт найден. Баланс: ${api.bonusCount}`;
            const keyboard = qrCodeUpdateKeyboard;

            await ctx.replyWithPhoto({ source: qrCodeBuff }, { caption: text, ...keyboard });
        } catch (error) {
            if (Object.keys(KNOWN_ERROR).includes(error.message)) throw new TelegrafException(KNOWN_ERROR[error.message].messageTg);
            throw new TelegrafException(error.message);
        }
    }

    @Action('update_qrcode')
    async updateQrCode(@Ctx() ctx: WizardContext) {
        const api = ctx.session['api'];
        await api.shortInfo();
        const qrCode = api.qrCode;
        const qrCodeBuff = await this.qrCodeService.generateQrCode(qrCode);

        // const text = `📱 Аккаунт найден. Баланс: ${api.bonusCount}`;
        const keyboard = qrCodeUpdateKeyboard.reply_markup;

        await ctx.editMessageMedia( { type: 'photo', media: { source: qrCodeBuff } }, { reply_markup: keyboard } );
    }
}

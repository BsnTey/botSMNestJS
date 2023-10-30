import { Ctx, Hears, On, Scene, SceneEnter, TelegrafException } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { ALL_KEYS_MENU_BUTTON_NAME, GET_QR, KNOWN_ERROR } from 'src/app.constants';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { QrCodeService } from './qr-code.service';
import { AccountService } from 'src/accounts/account.service';

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
            const qrCode = api.qrCode

            const qrCodeBuff = await this.qrCodeService.generateQrCode(qrCode)
            await ctx.replyWithPhoto({ source: qrCodeBuff})

        } catch (error) {
            if (KNOWN_ERROR.includes(error.message)) throw new TelegrafException(error.message);
            throw new TelegrafException(error);
        }
    }
}

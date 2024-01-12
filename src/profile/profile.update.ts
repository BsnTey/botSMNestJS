import { Ctx, Hears, Sender, On, Scene, SceneEnter, Action } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { ALL_KEYS_MENU_BUTTON_NAME, PROFILE } from 'src/app.constants';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { ProfileService } from './profile.service';
import { UserService } from 'src/users/user.service';
import { profileMenuKeyboard } from 'src/common/keyboards/inline.keyboard';

@Scene(PROFILE.scene)
export class ProfileUpdate {
    constructor(private profileService: ProfileService, private userService: UserService) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { first_name: telegramName, id: telegramId } = telegramUser;
        const user = await this.userService.GetOrCreateUser({ telegramId: String(telegramId), telegramName });
        ctx.session['userInfo'] = user;
        ctx.session['api'] = null;

        await ctx.reply(`Количество бонусов на вашем счету: ${user.countBonuses}`, profileMenuKeyboard);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @Action('go_to_requirement')
    async getInfoAboutBonusGet(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText(
            `Для получения бонусов необходимо:\n1. Приобрести аккаунт из раздела 'Фарм аккаунты'.\n2. Оформить первый заказ через бот(кнопка 'Сделать заказ').\n2.1 Итоговая сумма корзины должна быть больше 1000 руб.\n3. Баллы начисляются только за первый заказ фарм аккаунтов, за другие - нет`,
        );
    }

    @Action('go_to_shop')
    async goToShop(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText(`Функция в доработке`);
    }

    @Action('check_promo')
    async goToCheckerPromo(@Ctx() ctx: WizardContext) {
        await ctx.editMessageText(`Функция в доработке`);
    }
}

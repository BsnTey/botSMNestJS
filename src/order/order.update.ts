import {
    Command,
    Ctx,
    Hears,
    Start,
    Update,
    Sender,
    Message,
    On,
    Scene,
    SceneEnter,
    Wizard,
    WizardStep,
} from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { Context } from 'src/common/interfaces/context.interface';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { OrderService } from './order.service';
import { ORDER_WIZARD } from 'src/states/states';
import { BaseService } from 'src/base/base.service';

@Wizard(ORDER_WIZARD)
export class OrderUpdate {
    constructor(private orderService: OrderService, private baseService: BaseService) {}

    @WizardStep(1)
    async onSceneEnter(@Ctx() ctx: WizardContext, @Sender() telegramUser: any) {
        const { id: telegramId } = telegramUser;
        const user = await this.baseService.GetUserWithCitys(String(telegramId));
        ctx.wizard.state['userInfo'] = user;
        ctx.wizard.state['api'] = null;
        await ctx.wizard.next();
        await ctx.reply('🔑 Введите номер вашего аккаунта:', getMainMenu());
    }

    @WizardStep(2)
    async onSceneEnter2(@Ctx() ctx: WizardContext) {
        const user = ctx.wizard.state['userInfo'];
        console.log(user);
    }
}

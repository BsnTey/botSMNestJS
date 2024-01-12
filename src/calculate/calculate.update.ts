import { Action, Ctx, Hears, On, Scene, SceneEnter } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { ALL_KEYS_MENU_BUTTON_NAME, CALCULATE_BONUS, KNOWN_ERROR } from 'src/app.constants';
import { getMainMenu } from '../common/keyboards/reply.keyboard';
import { getValueKeysMenu } from 'src/common/utils/some.utils';
import { calculateInfoKeyboard } from 'src/common/keyboards/inline.keyboard';

@Scene(CALCULATE_BONUS.scene)
export class CalculateUpdate {

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: WizardContext) {
        ctx.session['api'] = null;
        await ctx.reply('🔑 Введите цены вещей', calculateInfoKeyboard);
    }

    @Hears(ALL_KEYS_MENU_BUTTON_NAME)
    async exit(@Ctx() ctx: WizardContext) {
        await ctx.scene.leave();
        const text = ctx.message['text'];
        await ctx.scene.enter(getValueKeysMenu(text));
    }

    @Action('go_to_calculate_info')
    async goToCalculateInfo(@Ctx() ctx: WizardContext) {
        await ctx.reply(`Цены на вещи вводим каждую с новой строки.\nВводим изначальную цену, БЕЗ УЧЕТА СКИДКИ\nЕсли на товар установлена скидка от магазина, то через пробел указываем какая.\nЕсли товар по лучшей/финальной/желтой цене, то через пробел пишем букву л (или любую другую)\nНапример:\n7299 35\n8999\n6499 70\n7499 л`)
    }

    @On('text')
    async calculatePrice(@Ctx() ctx: WizardContext) {
        const inputPrices: string = ctx.message['text'];
        const prices: string[] = inputPrices.split(/\r?\n/)

        let totalDiscount = 0
        let totalPrice = 0

        prices.forEach((value) => {
            try {
                let discountShop = 0
                let [price, discountSTR] = value.split(" ")
                if (discountSTR !== undefined) {
                    discountShop = !isNaN(Number(discountSTR)) ? +discountSTR : 228
                }
                
                const currentPriceItem = calculateCurrentPrice(+price, discountShop)
                const currentBonus = calculateBonus(+price, currentPriceItem, discountShop)

                totalPrice += currentPriceItem - currentBonus
                totalDiscount += currentBonus
            } catch (e) {
                console.log(e);
            }
        })
        await ctx.reply(`Цена на кассу: ${totalPrice}\nКоличество возможно примененных бонусов: ${totalDiscount}`, getMainMenu())

    }
}

const calculateCurrentPrice = (price: number, discountShop: number) => {
    if (discountShop == 228) return price
    let currentPriceItem = Math.floor((1 - discountShop / 100) * price)
    if (discountShop % 5 != 0) {
        const lastNumberPrice = currentPriceItem % 100
        const roundPrice = Math.floor(currentPriceItem / 100) * 100
        currentPriceItem = (lastNumberPrice < 50) ? roundPrice - 1 : roundPrice + 99
    }
    return currentPriceItem
}

const calculateBonus = (price: number, currentPriceItem: number, discountShop: number) => {
    let currentBonus = 0
    
    if (discountShop >= 0 && discountShop < 50) {
        currentBonus = Math.floor(currentPriceItem * 0.3)
        const maxDiscountItem = price / 2
        if (maxDiscountItem > currentPriceItem - currentBonus) {
            currentBonus = Math.floor(currentPriceItem - maxDiscountItem)
        }
    }
    return currentBonus
}

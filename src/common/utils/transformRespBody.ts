import { IItemListCart, RawListCart } from '../interfaces/apiSM/apiSM.interface';

export function parsingListCart(rawListCart: RawListCart): Array<IItemListCart> {
    let items = rawListCart.data.cartFull.unallocatedItems;
    const itemsDelivery = rawListCart.data.cartFull.obtainPoints;
    const itemsOutStock = rawListCart.data.cartFull.soldOutLines;

    if (itemsDelivery.length != 0) {
        const itemsTemp = itemsDelivery[0].cartItems[0];
        items.push(itemsTemp);
    }

    if (itemsOutStock.length != 0) {
        items = items.concat(itemsOutStock);
    }

    const cartItemId = items.map((itemDict) => {
        return {
            sku: itemDict.cartItemId.sku,
            productId: itemDict.cartItemId.productId,
            name: itemDict.name,
        };
    });
    return cartItemId;
}

export function prepareListOutput(rawListCart: any): string {
    const status = { true: 'ДА', false: 'НЕТ' };
    let text = '\n';
    const unallocatedItems = rawListCart.data.cartFull.unallocatedItems;
    unallocatedItems.forEach((item) => {
        text += `Название товара: ${item.name}\n`;
        text += `Количество товара: ${item.quantity}\n`;

        item.params.forEach((param) => {
            text += `${param.name}: ${param.value}\n`;
        });

        const itemPrice = parseInt(item.itemPrice.value, 10) / 100;
        const catalogPrice = parseInt(item.catalogPrice.value, 10) / 100;
        text += `Цена товара с учетом скидки: ${Math.floor(itemPrice)}\n`;
        text += `Цена товара без учета скидки: ${Math.floor(catalogPrice)}\n\n`;
    });

    text += '\nОбщая информация по заказу:\n';
    const totals = rawListCart.data.cartFull.totals;
    const productsAmount = Math.floor(parseInt(totals.productsAmount, 10));
    const priceWoDiscount = Math.floor(parseInt(totals.priceWoDiscount.value, 10) / 100);
    const bonuses = Math.floor(parseInt(totals.bonuses.value, 10) / 100);
    const promo = Math.floor(parseInt(totals.promo.value, 10) / 100);
    const total = Math.floor(parseInt(totals.total.value, 10) / 100);

    text += `Использовать бонусы?: ${status[String(rawListCart.data.cartFull.bonusApplied)]}\n`;
    text += `Применены ли бонусы к заказу?: ${status[String(rawListCart.data.cartFull.isBonusAvailable)]}\n`;
    text += `Использованные промокоды: ${rawListCart.data.cartFull.promoCodes}\n`;
    text += `Количество товаров в корзине: ${productsAmount}\n`;
    text += `Цена товаров без всех скидок: ${priceWoDiscount}\n`;
    text += `Количество примененных бонусов: ${bonuses}\n`;
    text += `Скидка по промо: ${promo}\n\n`;
    text += `Итоговая цена со всеми скидками: ${total}\n`;

    return text;
}

// export const transformCities = (cities: any) => {
//     const newCities = [];
//     for (let city of cities) {
//         const name = city.name;
//         const fullName = city.fullName;
//         const id = city.id;
//         newCities.push({ name, fullName, id });
//     }
//     return newCities;
// };

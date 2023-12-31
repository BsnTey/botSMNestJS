import { parse, format } from 'date-fns';

const validate = require('uuid-validate');
import { ALL_KEYS_MENU_BUTTON } from 'src/app.constants';
import {
    IFavouriteCities,
    IFavouriteCitiesGetBD,
    IOututBonusDate,
    ShopAddressType,
    ShopType,
} from '../interfaces/some.interface';
import { IItemListCart } from '../interfaces/apiSM/apiSM.interface';

export const isValidUUID = (uuid: string): boolean => {
    return validate(uuid);
};

export const getCurrentTimestamp = () => {
    const timestamp = new Date().getTime();
    return Math.floor(timestamp / 1000);
};

export const getValueKeysMenu = (key: string) => ALL_KEYS_MENU_BUTTON.find((btnObj) => key === btnObj.name)?.scene;

export const refactorCitiesAfterGetInBD = (cities: IFavouriteCitiesGetBD[]) => {
    const refactorCities: IFavouriteCities[] = [];
    for (let city of cities) {
        const id = city.cityId;
        const name = city.city.name;
        const fullName = city.city.fullName;

        refactorCities.push({ id, name, fullName });
    }
    return refactorCities;
};

export const isValidInputCity = (city: string): boolean => {
    const regex = /[а-яёА-ЯЁ\s-]+$/;
    return regex.test(city);
};

export const isValidInputCodePhone = (code: string): boolean => {
    const regex = /\d{4}/;
    return regex.test(code);
};

export const checkPhoneNumber = (number): string | null => {
    const regex1 = new RegExp('^7\\d{10}$');
    const regex2 = new RegExp('^8\\d{10}$');
    const regex3 = new RegExp('^\\+7\\d{10}$');
    const regex4 = new RegExp('^9\\d{9}$');

    if (regex1.test(number) || regex2.test(number)) {
        return number.substring(1);
    } else if (regex3.test(number)) {
        return number.substring(2);
    } else if (regex4.test(number)) {
        return number;
    }

    return null;
};

export const findCityName = (cityId, cities) => {
    for (let city of cities) {
        if (cityId === city.id) return city.name;
    }
};

export const findFavouriteCityName = (cityId, cities): IFavouriteCities => {
    for (let city of cities) {
        if (cityId === city.id) {
            return {
                id: cityId,
                name: city.name,
                fullName: city.fullName,
            };
        }
    }
};

export const isValidUrl = (link: string): boolean => {
    try {
        new URL(link);
        return true;
    } catch (err) {
        return false;
    }
};

export const getCombustionDates = (currentAmount: number, data: any): IOututBonusDate | null => {
    for (const amountDate of data) {
        const amount: number = amountDate.amount;
        if (currentAmount > amount) {
            const date = amountDate.date;
            const dateObject = parse(date, 'yyyy-MM-dd', new Date());
            const formattedDate = format(dateObject, 'dd/MM');
            return {
                amount: amount,
                date: formattedDate,
            };
        }
    }
    return null;
};

export const bringCompliance = (checkingAccounts, accounts: string[]) => {
    return accounts.map((account: string) => {
        const accTrim = account.trim();
        if (accTrim === '') return '\n';
        return checkingAccounts[accTrim];
    });
};

export const isAccessShop = (rawItemsCart) => {
    const unallocatedItems = rawItemsCart.data.cartFull.unallocatedItems;
    const unAccessItemsOrder = [];

    for (const item of unallocatedItems) {
        const name = item.name;
        const deliveryInfo = item.deliveryInfo;
        const onlyIntPickup = deliveryInfo.onlyIntPickup;
        const isExpressDeliveryEnabled = deliveryInfo.isExpressDeliveryEnabled;
        const isDeliveryServicesEnabled = deliveryInfo.isDeliveryServicesEnabled;

        if (!(onlyIntPickup || isExpressDeliveryEnabled || isDeliveryServicesEnabled)) unAccessItemsOrder.push(name);
    }
    return unAccessItemsOrder;
};

export const refactorNonAccessItems = (resultList: string[]) => {
    return resultList.join(', ');
};

export const refactorItemsCart = (itemsCart: any[]): IItemListCart[] => {
    const newItems: IItemListCart[] = [];

    for (const item of itemsCart) {
        const newItem: IItemListCart = {
            productId: item.productId,
            sku: item.sku,
        };
        newItems.push(newItem);
    }
    return newItems;
};

const availability = { SUPPLY: 'Под доставку', IN_STOCK: 'В наличии' };

export const refactorShopAddress = (shops: ShopType[]): ShopAddressType => {
    let shopAdd: ShopAddressType = {};

    for (let shop of shops) {
        let shopId = shop.shop.shopNumber;
        let name = shop.shop.name;
        let shopAddress = shop.shop.address;
        shopAdd[shopId] = {
            shopAddress,
            name,
            availability: availability[shop.availability],
        };
    }
    return shopAdd;
};

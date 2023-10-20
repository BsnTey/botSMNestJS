import { parse, format } from 'date-fns';

const validate = require('uuid-validate');
import { ALL_KEYS_MENU_BUTTON } from 'src/app.constants';
import { IFavouriteCities, IFavouriteCitiesGetBD, IOututBonusDate } from '../interfaces/some.interface';

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
    const resultList = [];

    for (const item of unallocatedItems) {
        const name = item.name;
        const deliveryInfo = item.deliveryInfo;
        const onlyIntPickup = deliveryInfo.onlyIntPickup;
        const isExpressDeliveryEnabled = deliveryInfo.isExpressDeliveryEnabled;
        const isDeliveryServicesEnabled = deliveryInfo.isDeliveryServicesEnabled;

        if (!onlyIntPickup && !isExpressDeliveryEnabled && !isDeliveryServicesEnabled) resultList.push(name);
    }
    return resultList;
};

export const refactorNonAccessItems = (resultList: string[]) => {
    return resultList.join(', ');
}

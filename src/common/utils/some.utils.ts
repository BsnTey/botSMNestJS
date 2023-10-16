const validate = require('uuid-validate');
import { ALL_KEYS_MENU_BUTTON } from 'src/app.constants';
import { IFavouriteCities, IFavouriteCitiesGetBD } from '../interfaces/some.interface';

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

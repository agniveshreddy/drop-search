import { types } from './index';

export const addCountryAction = (value) => {
    return {
        type: types.ADD_COUNTRY,
        value
    }
};
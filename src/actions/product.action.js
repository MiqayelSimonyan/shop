import { UPDATE_PRODUCT } from './action.types';

export function UpdateProduct(payload) {
    return {
        type: UPDATE_PRODUCT,
        payload
    };
}
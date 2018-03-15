import {
    ADD_SHOPS,
    ADD_SHOP,
    UPDATE_SHOP,
    DELETE_SHOP,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from './action.types';

export function AddShops(payload) {
    return {
        type: ADD_SHOPS,
        payload
    };
}

export function AddShop(payload) {
    return {
        type: ADD_SHOP,
        payload
    };
}

export function UpdateShop(payload) {
    return {
        type: UPDATE_SHOP,
        payload
    };
}

export function DeleteShop(payload) {
    return {
        type: DELETE_SHOP,
        payload
    };
}

export function AddProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload
    };
}

export function DeleteProduct(payload) {
    return {
        type: DELETE_PRODUCT,
        payload
    };
}
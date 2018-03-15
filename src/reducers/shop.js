import {
    ADD_SHOPS,
    ADD_SHOP,
    ADD_PRODUCT,
    DELETE_SHOP,
    DELETE_PRODUCT
} from '../actions/action.types';

export default function Shops(state = [], action) {
    let foundIndex;
    let newState;

    switch (action.type) {
        case ADD_SHOPS:
            return action.payload ? [...action.payload] : [...state];
        case ADD_SHOP:
            return [...state, ...action.payload];
        case ADD_PRODUCT:
            foundIndex = state.findIndex(shop => shop._id === action.payload._id);
            newState = [...state];
            newState.splice(foundIndex, 1, action.payload);
            return [...newState];
        case DELETE_SHOP:
            return [...state.filter(shop => shop._id !== action.payload._id)];
        case DELETE_PRODUCT:
            newState = [...state];
            newState.forEach(shop => {
                if (shop.products && shop.products.length) {
                    shop.products = shop.products.filter(product => product._id !== action.payload._id)
                }
            });
            return [...newState];
    }

    return state;
}
import {
    ADD_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/action.types';

export default function Products(state = [], action) {
    let foundIndex;
    let newState;

    switch (action.type) {
        case ADD_PRODUCTS:
            return [...action.payload];
        case ADD_PRODUCT:
            return [...state, ...action.payload];
        case UPDATE_PRODUCT:
            foundIndex = state.findIndex(product => product._id === action.payload._id);
            newState = [...state];
            newState.splice(foundIndex, 1, action.payload);
            return [...newState];
        case DELETE_PRODUCT:
            return [...state.filter(product => product._id !== action.payload._id)];
    }

    return state;
}
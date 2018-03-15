import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import Shops from './shop';
import Products from './product';
import Errors from './error';
import Success from './success';

export default combineReducers({
    Shops,
    Products,
    Success,
    Errors,
    routing: routeReducer
});
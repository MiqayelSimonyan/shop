import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
);
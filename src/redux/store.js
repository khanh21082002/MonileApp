import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import index from './index';

const middleware = [thunk];

export const store = createStore(
    index ,
    applyMiddleware(...middleware)
)
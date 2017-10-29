
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;
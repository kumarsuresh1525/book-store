/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-underscore-dangle */
import {
    createStore,
    compose,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '@store/reducers';

const devExtn =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.ENVIRONMENT !== 'production'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f;

const store = createStore(reducers, compose(applyMiddleware(thunk), devExtn));

export default store;

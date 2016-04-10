import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const logger = createLogger();
const middleware = [ReduxThunk, logger];
const composer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const Store = createStore(rootReducer, {}, composer);

export default Store;

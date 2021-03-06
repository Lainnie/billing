import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/root-reducer';

const logger = createLogger();
const middleware = [ReduxThunk, logger];
const composer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, {}, composer);

export default store;

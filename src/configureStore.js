'use strict';

import { Platform } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './redux/reducers/index';

export default function configureStore() {

  const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, createLogger())
  );

  return store;
}

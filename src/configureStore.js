'use strict';

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import reducer from './redux/reducers/index';

export default function configureStore (cb) {
  const store = createStore(
    reducer,
    undefined,
    compose(
      applyMiddleware(thunkMiddleware),
      autoRehydrate()
    )
  );
  persistStore(store, {storage: AsyncStorage}, cb);
  return store;
}

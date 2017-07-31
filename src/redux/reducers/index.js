'use strict';

import {combineReducers} from 'redux';

import session from './session';
import entry from './entry';
import entryDetail from './entryDetail';

import { SESSION_DESTROY } from '../actions';

const wrnApp = combineReducers({
  session,
  entry,
  entryDetail
});

const reducer = (state, action) => {
  if (action.type === SESSION_DESTROY) {
    // clears the following:
    state.entry = undefined;
    state.entryDetail = undefined;
  }
  return wrnApp(state, action);
};

export default reducer;

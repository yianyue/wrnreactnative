'use strict';

import {combineReducers} from 'redux';

import entry from './entry';
import session from './session';

const reducer = combineReducers({
  session: session,
  entry
});

export default reducer;

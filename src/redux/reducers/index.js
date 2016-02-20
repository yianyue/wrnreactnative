'use strict';

import {combineReducers} from 'redux';

const initialState = {
  auth: {
    user: null
  },
  entry: {
    list: [],
    loading: false,
    loaded: false,
    error: null
  }
};

function getAuth(state = initialState.auth, action ){
  switch (action.type) {
    case 'expression':{
      break;
    }
    default:{
      return state;
    }

  }
}

function getEntry(state = initialState.entry, action){
  switch (action.type) {
    case 'expression':{
      break;
    }
    default:{
      return state;
    }
  }
}

const wrnApp = combineReducers({
  auth: getAuth,
  entry: getEntry
});

export default wrnApp;

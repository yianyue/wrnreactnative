'use strict';

import {combineReducers} from 'redux';
import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAIL,
} from '../actions/index'

const initialState = {
  user: null,
  entry: {
    list: [],
    detail: null,
    loading: false,
    loaded: false,
    error: null
  }
};

function getUser(state = initialState.user, action ){
  switch (action.type) {
    case 'expression':{
      break;
    }
    default:{
      return state;
    }

  }
}

function getEntries(state = initialState.entry, action){
  switch (action.type) {
    case ENTRIES_REQUEST:{
      return {
        ...state,
        loading: true
      };
    }
    case ENTRIES_REQUEST_SUCCESS:{
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result
      };
    }
    case ENTRIES_REQUEST_FAIL:{
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    }
    default:{
      return state;
    }
  }
}

const wrnApp = combineReducers({
  user: getUser,
  entry: getEntries
});

export default wrnApp;

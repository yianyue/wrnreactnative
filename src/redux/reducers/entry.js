'use strict';

import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAIL,
  UPDATE_LIST_ENTRY
} from '../actions/index';

const initialState = {
  list: [],
  detail: null,
  loading: false,
  loaded: false,
  error: null
};

function getEntries (state = initialState, action) {
  switch (action.type) {
    case ENTRIES_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true
      };
    }
    case ENTRIES_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result
      };
    }
    case ENTRIES_REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    }
    case UPDATE_LIST_ENTRY: {
      return {
        ...state,
        list: action.list
      };
    }
    default: {
      return state;
    }
  }
}

export default getEntries;

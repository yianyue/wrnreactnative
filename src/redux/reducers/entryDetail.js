'use strict';

import {
  ENTRY_DETAIL_REQUEST, ENTRY_DETAIL_REQUEST_SUCCESS, ENTRY_DETAIL_REQUEST_FAIL
} from '../actions/index';

const initialEntry = {
  loading: false,
  error: null,
  data: null
};

const initialState = {};

function getEntries (state = initialState, action) {
  switch (action.type) {
    case ENTRY_DETAIL_REQUEST: {
      return {
        ...state,
        [action.id]: {
          ...initialEntry,
          error: null,
          loading: true
        }
      };
    }
    case ENTRY_DETAIL_REQUEST_SUCCESS: {
      return {
        ...state,
        [action.id]: {
          ...initialEntry,
          error: null,
          loading: false,
          data: action.result
        }
      };
    }
    case ENTRY_DETAIL_REQUEST_FAIL: {
      return {
        ...state,
        [action.id]: {
          ...initialEntry,
          loading: false,
          error: action.error
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default getEntries;

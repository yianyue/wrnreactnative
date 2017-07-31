'use strict';

import {
  ENTRY_DETAIL_REQUEST, ENTRY_DETAIL_REQUEST_SUCCESS, ENTRY_DETAIL_REQUEST_FAIL,
  UPDATE_CONTENT, UPDATE_CONTENT_SUCCESS, UPDATE_CONTENT_FAIL
} from '../actions/index';

const initialEntry = {
  loading: false,
  updating: false,
  error: null,
  data: null
};

const initialState = {};

function getEntries (state = initialState, action) {
  const currentEntry = state[action.id] || {};
  switch (action.type) {
    case ENTRY_DETAIL_REQUEST: {
      return {
        ...state,
        [action.id]: {
          ...initialEntry,
          ...currentEntry,
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
          ...currentEntry,
          ...action.result,
          error: null,
          loading: false,
        }
      };
    }
    case ENTRY_DETAIL_REQUEST_FAIL: {
      return {
        ...state,
        [action.id]: {
          ...initialEntry,
          ...currentEntry,
          loading: false,
          error: action.error
        }
      };
    }
    case UPDATE_CONTENT: {
      return {
        ...state,
        [action.id]: {
          ...currentEntry,
          ...action.data, // optimistic update
          updating: true,
          error: null
        }
      };
    }
    case UPDATE_CONTENT_SUCCESS: {
      return {
        ...state,
        [action.id]: {
          ...currentEntry,
          // ...action.result,
          updating: false
        }
      };
    }
    case UPDATE_CONTENT_FAIL: {
      return {
        ...state,
        [action.id]: {
          ...currentEntry,
          updating: false,
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

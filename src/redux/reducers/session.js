'use strict';

import {
  SESSION_REQUEST, SESSION_REQUEST_SUCCESS, SESSION_REQUEST_FAIL
} from '../actions/index';

const initialState = {
  session: {
    loggingIn: false,
    error: null,
    user: null
  },
  entry: {
    list: [],
    detail: null,
    loading: false,
    loaded: false,
    error: null
  }
};

function getUser (state = initialState.session, action) {
  switch (action.type) {
    case SESSION_REQUEST: {
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    }
    case SESSION_REQUEST_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    }
    case SESSION_REQUEST_FAIL: {
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}

export default getUser;

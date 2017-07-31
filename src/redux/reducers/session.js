'use strict';

import {
  SESSION_CREATE, SESSION_CREATE_SUCCESS, SESSION_CREATE_FAIL,
  SESSION_DESTROY, SESSION_DESTROY_SUCCESS, SESSION_DESTROY_FAIL
} from '../actions/index';

const initialState = {
  loggingIn: false,
  error: null,
  user: null
};

function getUser (state = initialState, action) {
  switch (action.type) {
    case SESSION_CREATE: {
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    }
    case SESSION_CREATE_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    }
    case SESSION_CREATE_FAIL: {
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    }
    case SESSION_DESTROY: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default getUser;

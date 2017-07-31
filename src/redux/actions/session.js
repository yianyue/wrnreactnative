'use strict';

import ApiClient from '../../APIClient';
import {
  SESSION_CREATE, SESSION_CREATE_SUCCESS, SESSION_CREATE_FAIL,
  SESSION_DESTROY, SESSION_DESTROY_SUCCESS, SESSION_DESTROY_FAIL
} from './index';

const apiClient = new ApiClient();

function login ({email, password}) {
  return (dispatch, getState) => {
    dispatch({type: SESSION_CREATE});

    return apiClient.post('/session', {data: {email, password}})
      .then(result => {
        dispatch({type: SESSION_CREATE_SUCCESS, result});
      })
      .catch(error => {
        dispatch({type: SESSION_CREATE_FAIL, error});
      });
  };
}

function logout () {
  return (dispatch, getState) => {
    const { session: {user} } = getState();
    dispatch({type: SESSION_DESTROY});
    return apiClient.del('/session', {}, user)
      .then(result => {
        dispatch({type: SESSION_DESTROY_SUCCESS, result});
      })
      .catch(error => {
        dispatch({type: SESSION_DESTROY_FAIL, error});
      });
  };
}

export { login, logout };

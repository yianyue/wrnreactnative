'use strict';

import ApiClient from '../../APIClient';
import { SESSION_REQUEST, SESSION_REQUEST_SUCCESS, SESSION_REQUEST_FAIL } from './index';

const apiClient = new ApiClient();

function login ({email, password}) {
  return (dispatch, getState) => {
    dispatch({type: SESSION_REQUEST});

    return apiClient.post('/session', {data: {email, password}})
      .then(result => {
        dispatch({type: SESSION_REQUEST_SUCCESS, result});
      })
      .catch(error => {
        dispatch({type: SESSION_REQUEST_FAIL, error});
      });
  };
}

export { login };

'use strict';

import ApiClient from '../../APIClient';
import { ENTRIES_REQUEST, ENTRIES_REQUEST_SUCCESS, ENTRIES_REQUEST_FAIL } from './index';

const apiClient = new ApiClient();

function requestEntries () {
  return {
    type: ENTRIES_REQUEST
  };
}

function requestEntriesSuccess (result) {
  console.log('requestEntriesSuccess', result.length);
  return {
    type: ENTRIES_REQUEST_SUCCESS,
    result
  };
}

function requestEntriesFail (error) {
  return {
    type: ENTRIES_REQUEST_FAIL,
    error
  };
}

function getEntries (params) {
  return (dispatch, getState) => {
    dispatch(requestEntries());
    const { user } = getState();
    apiClient.get('/entries', {params}, user)
      .then(result => {
        dispatch(requestEntriesSuccess(result));
      })
      .catch(error => {
        dispatch(requestEntriesFail(error));
      });
  };
}

export { getEntries };

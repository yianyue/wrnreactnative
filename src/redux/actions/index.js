'use strict';

import ApiClient from '../../APIClient';
const apiClient = new ApiClient();

const ENTRIES_REQUEST = 'ENTRIES_REQUEST',
  ENTRIES_REQUEST_SUCCESS = 'ENTRIES_REQUEST_SUCCESS',
  ENTRIES_REQUEST_FAIL = 'ENTRIES_REQUEST_FAIL';

function requestEntries(){
  return {
    type: ENTRIES_REQUEST
  };
}

function requestEntriesSuccess(result){
  return {
    type: ENTRIES_REQUEST_SUCCESS,
    result
  };
}

function requestEntriesFail(error){
  return {
    type: ENTRIES_REQUEST_FAIL,
    error
  };
}

function getEntries(params) {
  return (dispatch, getState) => {

    dispatch(requestEntries());

    apiClient.get('/entries', {params}, getState)
    .then( result => {
      dispatch(requestEntriesSuccess(result));
    })
    .catch( error => {
      dispatch(requestEntriesFail(error));
    });
  };

}

export { getEntries };

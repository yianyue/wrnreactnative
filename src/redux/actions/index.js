'use strict';

import ApiClient from '../../APIClient';
const apiClient = new ApiClient();

export const ENTRIES_REQUEST = 'ENTRIES_REQUEST';
export const ENTRIES_REQUEST_SUCCESS = 'ENTRIES_REQUEST_SUCCESS';
export const ENTRIES_REQUEST_FAIL = 'ENTRIES_REQUEST_FAIL';

export { getEntries };

function requestEntries(){
  return {
    type: ENTRIES_REQUEST
  };
}

function requestEntriesSuccess(result){
  console.log('requestEntriesSuccess', result.length)
  return {
    type: ENTRIES_REQUEST_SUCCESS,
    result
  };
}

function requestEntriesFail(error){
  console.log('requestEntriesFail', {error})
  return {
    type: ENTRIES_REQUEST_FAIL,
    error
  };
}

function getEntries(params) {

  return (dispatch, getState) => {

    dispatch(requestEntries());

    apiClient.get('/entries', {params} )
    .then( result => {
      dispatch(requestEntriesSuccess(result));
    })
    .catch( error => {
      dispatch(requestEntriesFail(error));
    });
  };

}

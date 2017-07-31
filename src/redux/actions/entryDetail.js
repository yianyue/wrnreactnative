'use strict';

import ApiClient from '../../APIClient';
import { ENTRY_DETAIL_REQUEST, ENTRY_DETAIL_REQUEST_SUCCESS, ENTRY_DETAIL_REQUEST_FAIL } from './index';

const apiClient = new ApiClient();

function requestEntry (id) {
  return {
    type: ENTRY_DETAIL_REQUEST,
    id
  };
}

function requestEntrySuccess (result) {
  return {
    type: ENTRY_DETAIL_REQUEST_SUCCESS,
    result,
    id: result.id
  };
}

function requestEntryFail (id, error) {
  return {
    type: ENTRY_DETAIL_REQUEST_FAIL,
    id,
    error
  };
}

function getEntryDetail (id) {
  return (dispatch, getState) => {
    dispatch(requestEntry(id));
    const { session: {user} } = getState();
    apiClient.get('/entries/' + id, {}, user)
      .then(result => {
        dispatch(requestEntrySuccess(result));
      })
      .catch(error => {
        dispatch(requestEntryFail(id, error));
      });
  };
}

export { getEntryDetail };

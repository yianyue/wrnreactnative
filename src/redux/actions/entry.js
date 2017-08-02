'use strict';

import ApiClient from '../../APIClient';
import { ENTRIES_REQUEST, ENTRIES_REQUEST_SUCCESS, ENTRIES_REQUEST_FAIL, UPDATE_LIST_ENTRY } from './index';

const apiClient = new ApiClient();

function requestEntries () {
  return {
    type: ENTRIES_REQUEST
  };
}

function requestEntriesSuccess (result) {
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

function getEntries () {
  return (dispatch, getState) => {
    dispatch(requestEntries());
    const { session: {user} } = getState();
    apiClient.get('/entries', {}, user)
      .then(result => {
        dispatch(requestEntriesSuccess(result));
      })
      .catch(error => {
        dispatch(requestEntriesFail(error));
      });
  };
}

function _merge (list, newData) {
  const index = list.findIndex(item => item.id === newData.id);
  if (index > -1) {
    return [
      ...list.slice(0, index),
      Object.assign({}, list[index], newData),
      ...list.slice(index + 1)
    ];
  } else {
    return list;
  }
}

function updateListEntry (data) {
  return (dispatch, getState) => {
    const { entry: {list} } = getState();
    const newList = _merge(list, data);
    dispatch({
      type: UPDATE_LIST_ENTRY,
      list: newList
    });
  };
}

export { getEntries, updateListEntry };

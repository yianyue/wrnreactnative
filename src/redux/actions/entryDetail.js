'use strict';

import ApiClient from '../../APIClient';
import {
  ENTRY_DETAIL_REQUEST, ENTRY_DETAIL_REQUEST_SUCCESS, ENTRY_DETAIL_REQUEST_FAIL,
  UPDATE_CONTENT, UPDATE_CONTENT_SUCCESS, UPDATE_CONTENT_FAIL
} from './index';

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
    id: result.id,
    result
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
    const { session: {user} } = getState();
    dispatch(requestEntry(id));
    apiClient.get('/entries/' + id, {}, user)
      .then(result => {
        dispatch(requestEntrySuccess(result));
      })
      .catch(error => {
        dispatch(requestEntryFail(id, error));
      });
  };
}

function countWords (str) {
  return str.trim().split(/\s+/).length;
}

const DEBOUNCE_TIME_IN_MS = 1000;

// optimistic update
function updateContent (id, content) {
  console.log('updateContent', id);
  return (dispatch, getState) => {
    const { session: {user} } = getState();
    dispatch({
      type: UPDATE_CONTENT,
      id,
      data: {
        content,
        word_count: countWords(content)
      }
    });
    apiClient.put('/entries/' + id, {data: {data: {content}}}, user)
      .then(result => {
        console.log('update result', result);
        dispatch({
          type: UPDATE_CONTENT_SUCCESS,
          result
        });
      }).catch(error => {
        dispatch({
          type: UPDATE_CONTENT_FAIL,
          error,
          id
        });
      });
  };
}

export { getEntryDetail, updateContent };

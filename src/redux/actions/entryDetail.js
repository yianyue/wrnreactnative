'use strict';

import ApiClient from '../../APIClient';
import {
  ENTRY_DETAIL_REQUEST, ENTRY_DETAIL_REQUEST_SUCCESS, ENTRY_DETAIL_REQUEST_FAIL,
  UPDATE_CONTENT, UPDATE_CONTENT_SUCCESS, UPDATE_CONTENT_FAIL
} from './index';

import { updateListEntry } from './entry';

import { countWords } from '../../helpers';

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

// optimistic update
function updateContent (id, content) {
  return (dispatch, getState) => {
    const { session: {user} } = getState();
    const word_count = countWords(content);
    dispatch({
      type: UPDATE_CONTENT,
      id,
      data: {
        content,
        word_count
      }
    });
    apiClient.put('/entries/' + id, {data: {data: {content}}}, user)
      .then(result => {
        dispatch({
          type: UPDATE_CONTENT_SUCCESS,
          result
        });
        dispatch(updateListEntry(result));
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

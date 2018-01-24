import {
    GET_ALL_CATEGORIES,
    SERVER_URL,
    AUTH_HEADERS
} from './types';
import { actionError, actionSuccess } from './common';
import superagent from 'superagent';
import nocache from 'superagent-no-cache';

// -----------------------------------------------------------------------------
//                                 CATEGORIES ACTIONS
// -----------------------------------------------------------------------------

export function getAllCategories() { 
  return dispatch => {
    superagent.get(SERVER_URL + '/categories')
      .set(AUTH_HEADERS)
      .on('error', actionError(GET_ALL_CATEGORIES))
      .use(nocache)
      .then(response => dispatch(actionSuccess(response.body, GET_ALL_CATEGORIES)));        
  };
}

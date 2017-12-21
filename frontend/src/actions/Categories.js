import {
    GET_ALL_CATEGORIES,
    SERVER_URL,
    AUTH_HEADERS
} from './types';

import superagent from 'superagent';
import nocache from 'superagent-no-cache';

// -----------------------------------------------------------------------------
//                                 CATEGORIES ACTIONS
// -----------------------------------------------------------------------------
// https://visionmedia.github.io/superagent/

export function getAllCategories() {
  // console.log('GET ALL CATEGORIES');
  // return dispatch => {
  //   fetch(SERVER_URL + "/categories/", {method: "GET", headers: AUTH_HEADERS})
  //   .then((resp) => {
  //     resp.json().then((data) => {
  //       dispatch(getAllCategoriesSuccess(data));
  //     })
  //   });
  // }
  return dispatch => {
    superagent.get(SERVER_URL + '/categories')
      .set(AUTH_HEADERS)
      .on('error', getAllCategoriesError())
      .use(nocache)
      .then(response => dispatch(getAllCategoriesSuccess(response.body)));
  };
}

export function getAllCategoriesSuccess(categories) {
    console.log(categories);
  return {
    type: GET_ALL_CATEGORIES,
    data: categories
  };
}

// TODO: Check if it's used...
export function getAllCategoriesError(response) {
  return {
    type: GET_ALL_CATEGORIES,
    data: []
  };
}

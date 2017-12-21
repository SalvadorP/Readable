import {
    GET_ALL_POSTS,
    SERVER_URL,
    AUTH_HEADERS
} from './types';

import superagent from 'superagent';
import nocache from 'superagent-no-cache';

// -----------------------------------------------------------------------------
//                                 POSTs ACTIONS
// -----------------------------------------------------------------------------
// https://visionmedia.github.io/superagent/

export function getAllPosts() {
  // console.log('GET ALL POSTS');
  // return dispatch => {
  //   fetch(SERVER_URL + "/posts/", {method: "GET", headers: AUTH_HEADERS})
  //   .then((resp) => {
  //     resp.json().then((data) => {
  //       dispatch(getAllPostsSuccess(data));
  //     })
  //   });
  // }
  return dispatch => {
    superagent.get(SERVER_URL + '/posts')
      .set(AUTH_HEADERS)
      .on('error', getAllPostsError())
      .use(nocache)
      .then(response => dispatch(getAllPostsSuccess(response.body)));
  };
}

export function getAllPostsSuccess(posts) {
  return {
    type: GET_ALL_POSTS,
    data: posts
  };
}

// TODO: Check if it's used...
export function getAllPostsError(response) {
  return {
    type: GET_ALL_POSTS,
    data: []
  };
}

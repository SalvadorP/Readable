import {
    GET_ALL_POSTS,
    SERVER_URL,
    AUTH_HEADERS,
    POST_VOTE_DOWN,
    POST_VOTE_UP,
    GET_POST
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

export function getPost(id) {
    return dispatch => {
        superagent.get(SERVER_URL + '/posts/' + id)
            .set(AUTH_HEADERS)
            .on('error', getPostsError())
            .use(nocache)
            .then(response => dispatch(getPostsSuccess(response.body)));
    };
}

export function getPostsSuccess(post) {
    return {
        type: GET_POST,
        data: post
    };
}
  
export function getPostsError(response) {
    return {
      type: GET_POST,
      data: []
    };
}


export function postVoteUp(id) {
    console.log('POST = ' + id + ' VOTE UP');
    console.log(SERVER_URL + '/posts');
    return dispatch => {
        // superagent.post(SERVER_URL + '/posts')
        //     .set(AUTH_HEADERS)
        //     .send({option: 'upVote'})            
        //     // .on('error', votePostError())
        //     // .use(nocache)
        //     .then(response => dispatch(votePostSuccess(response.body, POST_VOTE_UP)));
        const options = {
            method: 'post',
            headers: AUTH_HEADERS,
            body: JSON.stringify({
              option: 'upVote'
            })
          }
          console.log("INSIDE!");
          return fetch(`http://localhost:3001/posts/${id}`, options)
          .then(
            res => {
              return res.json()
            }
          )
          .catch(err => console.error(err))
    }
}

export function postVoteDown(id) {
  console.log('POST = ' + id + ' VOTE DOWN');
  console.log(SERVER_URL + '/posts/' + id);
    return dispatch => {
        superagent.post(SERVER_URL + '/posts/' + id)
            .send({option: 'downVote'})
            .set(AUTH_HEADERS)
            .on('error', votePostError())
            // .use(nocache)
            .then(response => dispatch(votePostSuccess(response.body, POST_VOTE_DOWN)));
    }
}

export function votePostSuccess(data, type) {
    console.log('VOTE POST SUCCESS');
    console.log(data);
    console.log("--------");
    return {
        type: type,
        data: data
    };
}

export function votePostError() {
    console.log('VOTE POST ERROR!!');
    console.log("--------");
    return {
        type: POST_VOTE_UP,
        data: []
    };
}
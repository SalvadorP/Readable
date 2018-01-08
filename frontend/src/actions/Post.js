import {
    GET_ALL_POSTS,
    SERVER_URL,
    AUTH_HEADERS,
    POST_VOTE_DOWN,
    POST_VOTE_UP,
    GET_POST,
    DELETE_POST,
    EDIT_POST
} from './types';

import superagent from 'superagent';
import nocache from 'superagent-no-cache';

// -----------------------------------------------------------------------------
//                                 POSTs ACTIONS
// -----------------------------------------------------------------------------
// https://visionmedia.github.io/superagent/

export function getAllPosts() {
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
            .on('error', getPostError())
            .use(nocache)
            .then(response => dispatch(getPostSuccess(response.body)));
    };
}

export function getPostSuccess(post) {
    console.log('============ GET POST SUCCESS ========');
    console.log(post);
    console.log('====================================');
    return {
        type: GET_POST,
        data: post
    };
}
  
export function getPostError(response) {
    return {
      type: GET_POST,
      data: []
    };
}

export function postVoteUp(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/posts/' + id)
            .set(AUTH_HEADERS)
            .send({option: 'upVote'})            
            .on('error', postVoteUpError())
            // .use(nocache)
            .then(response => dispatch(postVoteUpSuccess(response.body, POST_VOTE_UP)));        
    }
}

export function postVoteDown(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/posts/' + id)
            .send({option: 'downVote'})
            .set(AUTH_HEADERS)
            .on('error', postVoteDownError())
            // .use(nocache)
            .then(response => dispatch(postVoteDownSuccess(response.body, POST_VOTE_DOWN)));
    }
}

export function postVoteUpSuccess(data, type) {
    console.log('VOTE UP POST SUCCESS');
    console.log(data);
    console.log("--------");
    return {
        type: type,
        data: data
    };
}

export function postVoteDownSuccess(data, type) {
    console.log('VOTE DOWN POST SUCCESS');
    console.log(data);
    console.log("--------");
    return {
        type: type,
        data: data
    };
}

export function postVoteUpError() {
    console.log('VOTE UP POST ERROR!!');
    console.log("--------");
    return {
        type: POST_VOTE_UP,
        data: []
    };
}

export function postVoteDownError() {
    console.log('VOTE DOWN POST ERROR!!');
    console.log("--------");
    return {
        type: POST_VOTE_DOWN,
        data: []
    };
}

export function editPost(id) {
    console.log('POST = ' + id + ' EDIT');
    console.log(SERVER_URL + '/posts/' + id);
    // return dispatch => {
    //     superagent.put(SERVER_URL + '/posts/' + id)
    //         .set(AUTH_HEADERS)
    //         .send({option: 'upVote'})            
    //         .on('error', editPostError())
    //         // .use(nocache)
    //         .then(response => dispatch(editPostSuccess(response.body, EDIT_POST)));        
    // }
}

export function editPostSuccess(data, type) {
    return {
        type: type,
        data: data
    };
}

export function editPostError() {
    return {
        type: DELETE_POST,
        data: []
    };
}

export function deletePost(id) {
    console.log('POST = ' + id + ' DELETE');
    console.log(SERVER_URL + '/posts/' + id);
    return dispatch => {
        console.log('dispatching delete');
        superagent.del(SERVER_URL + '/posts/' + id)
            .send({id: id})
            .set(AUTH_HEADERS)        
            .on('error', deletePostError())
            // .use(nocache)
            .then(response => dispatch(deletePostSuccess(id, DELETE_POST)));        
    }
}

export function deletePostSuccess(data, type) {
    console.log('============== DELETE POST SUCCESS ======================');
    console.log(data);
    console.log('====================================');
    return {
        type: type,
        data: data
    };
}

export function deletePostError() {
    return {
        type: DELETE_POST,
        data: []
    };
}
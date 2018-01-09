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
      .on('error', actionError(GET_ALL_POSTS))
      .use(nocache)
      .then(response => dispatch(actionSuccess(response.body, GET_ALL_POSTS)));
  };
}

export function getPost(id) {
    return dispatch => {
        superagent.get(SERVER_URL + '/posts/' + id)
            .set(AUTH_HEADERS)
            .on('error', actionError(GET_POST))
            .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, GET_POST)));
    };
}

export function postVoteUp(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/posts/' + id)
            .set(AUTH_HEADERS)
            .send({option: 'upVote'})            
            .on('error', actionError(POST_VOTE_UP))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, POST_VOTE_UP)));        
    }
}

export function postVoteDown(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/posts/' + id)
            .send({option: 'downVote'})
            .set(AUTH_HEADERS)
            .on('error', actionError(POST_VOTE_DOWN))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, POST_VOTE_DOWN)));
    }
}

export function editPost(id, data) {
    // IDEA: Consider using an object instead of parameters.
    console.log('POST = ' + id + ' EDIT');
    console.log(SERVER_URL + '/posts/' + id);
    // return dispatch => {
    //     superagent.put(SERVER_URL + '/posts/' + id)
    //         .set(AUTH_HEADERS)
    //         .send({option: 'upVote'})            
    //         .on('error', actionError(EDIT_POST))
    //         // .use(nocache)
    //         .then(response => dispatch(actionSuccess(response.body, EDIT_POST)));        
    // }
}

export function deletePost(id) {
    return dispatch => {
        superagent.del(SERVER_URL + '/posts/' + id)
            .send({id: id})
            .set(AUTH_HEADERS)        
            .on('error', actionError(DELETE_POST))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(id, DELETE_POST)));        
    }
}

// -------------------- COMMON FUNCTIONS FOR THE ACTIONS --------------------
export function actionSuccess(data, type) {
    return {
        type: type,
        data: data
    };
}

export function actionError(type) {
    return {
        type: type,
        data: []
    };
}
// --------------------------------------------------------------------------
import {
    SERVER_URL,
    AUTH_HEADERS,
    GET_POST_COMMENTS,
    GET_POST_COMMENTS_TOTAL,
    NEW_COMMENT,
    GET_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    COMMENT_VOTE_UP,
    COMMENT_VOTE_DOWN
} from './types';
import { actionError, actionSuccess } from './common';
import superagent from 'superagent';
import nocache from 'superagent-no-cache';

// -----------------------------------------------------------------------------
//                                 Comments ACTIONS
// -----------------------------------------------------------------------------

export function getPostComments(id) {
  return dispatch => {
    superagent.get(SERVER_URL + '/posts/' + id + '/comments')
      .set(AUTH_HEADERS)
      .on('error', actionError(GET_POST_COMMENTS))
      .use(nocache)
      .then(response => dispatch(actionSuccess(response.body, GET_POST_COMMENTS)));
  };
}

/* Really necessary this one? */
export function getPostCommentsTotal(id) {
    return dispatch => {
      superagent.get(SERVER_URL + '/posts/' + id + '/comments')
        .set(AUTH_HEADERS)
        .on('error', actionError(GET_POST_COMMENTS_TOTAL))
        .use(nocache)
        .then(response => dispatch(actionSuccess(response.body, GET_POST_COMMENTS_TOTAL)));
    };
  }
  

export function getComment(id) {
    return dispatch => {
        superagent.get(SERVER_URL + '/comments/' + id)
            .set(AUTH_HEADERS)
            .on('error', actionError(GET_COMMENT))
            .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, GET_COMMENT)));
    };
}

export function commentVoteUp(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/comments/' + id)
            .set(AUTH_HEADERS)
            .send({option: 'upVote'})            
            .on('error', actionError(COMMENT_VOTE_UP))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, COMMENT_VOTE_UP)));        
    }
}

export function commentVoteDown(id) {
    return dispatch => {
        superagent.post(SERVER_URL + '/comments/' + id)
            .send({option: 'downVote'})
            .set(AUTH_HEADERS)
            .on('error', actionError(COMMENT_VOTE_DOWN))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(response.body, COMMENT_VOTE_DOWN)));
    }
}

export function postComment(formValues) {
    return dispatch => {
        console.log('POSTING COMMENT!');
        superagent.post(SERVER_URL + '/comments')
            .set(AUTH_HEADERS)
            .send(formValues)            
            .on('error', actionError(NEW_COMMENT))
            // .use(nocache)
            .then(response => {dispatch(actionSuccess(response.body, NEW_COMMENT))});        
    }
}

export function editComment(formValues) {
    const id = formValues.id;
    return dispatch => {
        superagent.put(SERVER_URL + '/comments/' + id)
            .set(AUTH_HEADERS)
            .send(formValues)            
            .on('error', actionError(EDIT_COMMENT))
            // .use(nocache)
            .then(response => {dispatch(actionSuccess(response.body, EDIT_COMMENT))});        
    }
}

export function deleteComment(id) {
    return dispatch => {
        superagent.del(SERVER_URL + '/comments/' + id)
            .send({id: id})
            .set(AUTH_HEADERS)        
            .on('error', actionError(DELETE_COMMENT))
            // .use(nocache)
            .then(response => dispatch(actionSuccess(id, DELETE_COMMENT)));        
    }
}

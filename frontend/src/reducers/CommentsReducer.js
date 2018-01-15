import _ from 'lodash';
import {
    GET_POST_COMMENTS,
    GET_POST_COMMENTS_TOTAL,
    NEW_COMMENT,
    GET_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    COMMENT_VOTE_UP,
    COMMENT_VOTE_DOWN
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return _.mapKeys(action.data, 'id');
        case GET_COMMENT:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case COMMENT_VOTE_UP:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case COMMENT_VOTE_DOWN:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case DELETE_COMMENT:
            // Just return the state without the deleted post.            
            return _.omit(state, action.data);
        case EDIT_COMMENT:
            return state;
        case NEW_COMMENT:
            return state;

        default:
            return state;
    }
}
import _ from 'lodash';
import {
    GET_ALL_POSTS, POST_VOTE_UP, POST_VOTE_DOWN, GET_POST, DELETE_POST, EDIT_POST
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return _.mapKeys(action.data, 'id');
        case GET_POST:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case POST_VOTE_UP:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case POST_VOTE_DOWN:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case DELETE_POST:
            // Just return the state without the deleted post.            
            return _.omit(state, action.data);
        case EDIT_POST:
            console.log('============EDITING POST REDUCER ==================');
            console.log(state);
            console.log(action);
            console.log('====================================');
            return state;

        default:
            return state;
    }
}
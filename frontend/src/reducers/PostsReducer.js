import _ from 'lodash';
import {
    GET_ALL_POSTS, POST_VOTE_UP, POST_VOTE_DOWN, GET_POST, DELETE_POST
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
            console.log('REDUCER DELETE');
            return _.omit(state, action.data);
        default:
            return state;
    }
}
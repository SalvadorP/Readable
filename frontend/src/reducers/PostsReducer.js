import _ from 'lodash';
import {
    GET_ALL_POSTS
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return _.mapKeys(action.data, 'id');
        default:
            return state;
    }
}
import _ from 'lodash';
import {
  GET_ALL_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {};

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_CATEGORIES:
        return action.data.categories;
    default:
        return state;
  }
}

import {
  GET_ALL_POSTS
} from '../actions/types';

import {combineReducers} from 'redux';

export function posts(state = null, action) {
  // var new_posts = state;
  var posts = {};

  switch(action.type) {
    case GET_ALL_POSTS:
      for(let num in action.posts) {
        posts[ action.posts[num].id ] = action.posts[num]
      }
      return posts;
      default: break;
  }

}

export function comments(state = null, action) {
  return true;
}

function red1(){
    return true;
}

function red2() {
    return true;
}

export default combineReducers({red1, red2});

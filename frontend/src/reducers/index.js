import _ from 'lodash';
import {
  GET_ALL_POSTS
} from '../actions/types';

// import {combineReducers} from 'redux';

const INITIAL_STATE = {};

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      // console.log('====================================');
      // console.log(action);
      // console.log('====================================');    
      return _.mapKeys(action.data, 'id');
    default:
    break;
  }
}

// export function posts(state = null, action) {
//   // var new_posts = state;
//   var posts = {};

//   switch(action.type) {
//     case GET_ALL_POSTS:
//       for(let num in action.posts) {
//         posts[ action.posts[num].id ] = action.posts[num]
//       }
//       return posts;
//       default: break;
//   }

// }

// export function comments(state = null, action) {
//   return true;
// }

// function red1(){
//     return true;
// }

// function red2() {
//     return true;
// }

// export default combineReducers({red1, red2});

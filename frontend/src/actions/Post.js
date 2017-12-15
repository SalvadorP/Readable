import {
    GET_ALL_POSTS,
    ROOT_URL
} from './types';

// -----------------------------------------------------------------------------
//                                 POSTs ACTIONS
// -----------------------------------------------------------------------------

export function get_all_posts({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

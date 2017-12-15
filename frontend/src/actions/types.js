// Action constants

// Post Actions
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const NEW_POST = 'NEW_POST';
export const GET_POST = 'GET_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

// Comment Actions
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const GET_POST_COMMENTS_NUMBER = 'GET_POST_COMMENTS_NUMBER';
export const NEW_COMMENT = 'NEW_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// Category Actions
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

// Vote Actions
export const POST_VOTE_UP = 'POST_VOTE_UP';
export const POST_VOTE_DOWN = 'POST_VOTE_DOWN';
export const COMMENT_VOTE_UP = 'COMMENT_VOTE_UP';
export const COMMENT_VOTE_DOWN = 'COMMENT_VOTE_DOWN';

// Sorting Actions
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const GET_POSTS_BY_UPVOTE = 'GET_POSTS_BY_UPVOTE';
export const GET_POSTS_BY_DOWNVOTE = 'GET_POSTS_BY_DOWNVOTE';


// Contant for the url
// CHECK: Is it a good idea to put it here? or better a constant.js file?
export const ROOT_URL = 'http://localhost:3001'; // http://localhost:5001'
import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import CategoriesReducer from './CategoriesReducer';
import CommentsReducer from './CommentsReducer';

const mainReducer = combineReducers({
    posts: PostsReducer,
    categories: CategoriesReducer,
    comments: CommentsReducer,
});

export default mainReducer;
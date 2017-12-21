import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import CategoriesReducer from './CategoriesReducer';

const mainReducer = combineReducers({
    posts: PostsReducer,
    categories: CategoriesReducer
});

export default mainReducer;
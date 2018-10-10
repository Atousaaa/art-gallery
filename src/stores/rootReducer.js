import { combineReducers } from 'redux';
import categories from './categories';
import reviews from './reviews';

export default combineReducers({
    categories,   //state object
    reviews
})



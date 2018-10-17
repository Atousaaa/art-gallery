import { combineReducers } from 'redux';
import categories from './categories';
import reviews from './reviews';
import photoDetails from './pictureDetails';
import galleriesData from './galleries';

export default combineReducers({
    categories,   //state object
    reviews,
    photoDetails,
    galleriesData
})



import { combineReducers } from 'redux';
import categories from './categories';
import reviews from './reviews';
import photoDetails from './pictureDetails';
import galleriesData from './galleries';
import galleryDetails from './galleryDetails';

export default combineReducers({
    categories,   //state object
    reviews,
    photoDetails,
    galleriesData,
    galleryDetails
})



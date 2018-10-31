import { combineReducers } from 'redux';
//import reviews from './reviews';
import restaurants from './restaurants';
//import restaurantList from './restaurantReducer';
import reviews from './reviewReducer';
import save from './save';
import categories from './categories'
import filter from './filterReducer';




const rootReducer = combineReducers({
    reviews, 
    restaurants,
    save,
    categories,
    filter,
    //restaurantList,//alltså för homepagen
    //reviewList
});




export default rootReducer;
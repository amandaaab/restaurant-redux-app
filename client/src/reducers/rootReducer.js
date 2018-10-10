import { combineReducers } from 'redux';
//import reviews from './reviews';
import restaurants from './restaurants';
//import restaurantList from './restaurantReducer';
import reviews from './reviewReducer';
import save from './save';



const rootReducer = combineReducers({
    reviews, 
    restaurants,
    save, 
    //restaurantList,//alltså för homepagen
    //reviewList
});




export default rootReducer;
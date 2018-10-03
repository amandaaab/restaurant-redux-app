import { combineReducers } from 'redux';
import reviews from './reviews';
import restaurants from './restaurants';
import restaurantList from './restaurantReducer';
import save from './save';



const rootReducer = combineReducers({
    reviews, 
    restaurants,
    save, 
    restaurantList
});




export default rootReducer;
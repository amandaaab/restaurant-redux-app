import { combineReducers } from 'redux';
import reviews from './reviews';
import restaurants from './restaurants';



const rootReducer = combineReducers({
    reviews, 
    restaurants
});




export default rootReducer;
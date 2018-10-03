import { combineReducers } from 'redux';
import reviews from './reviews';
import restaurants from './restaurants';
import save from './save';



const rootReducer = combineReducers({
    reviews, 
    restaurants,
    save
});




export default rootReducer;
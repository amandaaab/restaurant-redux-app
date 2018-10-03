import { combineReducers } from 'redux';
import reviews from './reviews';
import restaurants from './restaurants';
import save from './save';
import products from './products';



const rootReducer = combineReducers({
    reviews, 
    restaurants,
    save,
    products
});




export default rootReducer;
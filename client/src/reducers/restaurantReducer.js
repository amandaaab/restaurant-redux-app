import { FETCH_PRODUCTS_SUCCESS } from '../actions/restaurantAction';

const initialState = {
  restaurantList: []
};

export default function restaurantList(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        restaurantList: action.payload.restaurants
      };

    }

    return state;

 
  }
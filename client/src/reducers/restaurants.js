import { 
      FETCH_RESTAURANTS_BEGIN,
      FETCH_RESTAURANTS_FAILURE,
      FETCH_RESTAURANTS_SUCCESS
} from '../actions/restaurantAction';

const initialState = {
   restaurants: [],
   loading: false,
    error: null
        
}

export default function restaurants(state = initialState, action) {
  switch(action.type) {

    case FETCH_RESTAURANTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_RESTAURANTS_SUCCESS:
       //All done: set loading "false".
     //  Also, replace the items with the ones from the server
      return {
        ...state,
        restaurants: action.payload.restaurants,
        loading: false
      };




      case FETCH_RESTAURANTS_FAILURE:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
      loading: false,
      error: action.payload.error,
      restaurants: []
      }

         default: return state;
    }

 
}

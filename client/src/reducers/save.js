import { 
    FETCH_SAVED_RESTAURANTS_BEGIN,
    FETCH_SAVED_RESTAURANTS_SUCCESS,
    FETCH_SAVED_RESTAURANTS_FAILURE,
    FETCH_SAVE_RESTAURANT_BEGIN,
    FETCH_SAVE_RESTAURANT_SUCCESS,
    FETCH_SAVE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_BEGIN,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_FAILURE
    } from '../actions/saveAction';


const initialState = {
    savedRestaurants: [],
    loading: false,
    error: null
}


export default function save(state = initialState, action) {
    switch(action.type) {

        case FETCH_SAVED_RESTAURANTS_BEGIN:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_SAVED_RESTAURANTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        savedRestaurants: action.payload.restaurants
      }

      case FETCH_SAVED_RESTAURANTS_FAILURE:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
      loading: false,
      error: action.payload.error,
      savedRestaurants: []
      }
  
        case FETCH_SAVE_RESTAURANT_BEGIN:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: true,
          error: null
        }
  
        case FETCH_SAVE_RESTAURANT_SUCCESS: 
  
        return {
            ...state,
            savedRestaurants: state.savedRestaurants.concat(action.payload),
            loading: false 
           }
  
  
         case FETCH_SAVE_RESTAURANT_FAILURE:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
        loading: false,
        error: action.payload.error,
        savedRestaurants: []
        }

        case DELETE_RESTAURANT_BEGIN:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: true,
          error: null
        }
  
        case DELETE_RESTAURANT_SUCCESS: 
  
        return {
            ...state,
            //savedRestaurants: state.savedRestaurants.concat(action.payload),
            savedRestaurants: state.savedRestaurants.filter(restaurant => action.payload !== restaurant.id),
            loading: false 
           }
  
  
         case DELETE_RESTAURANT_FAILURE:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
        loading: false,
        error: action.payload.error,
        //savedRestaurants: []
        }
  
           default: return state;
      }


      
  }
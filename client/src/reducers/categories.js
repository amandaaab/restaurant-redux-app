import { 
    FETCH_CATEGORIES_BEGIN,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS
} from '../actions/categoryAction';

const initialState = {
 categories: [],
 loading: false,
  error: null
      
}

export default function Categories(state = initialState, action) {
switch(action.type) {

  case FETCH_CATEGORIES_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    }

  case FETCH_CATEGORIES_SUCCESS:
     //All done: set loading "false".
   //  Also, replace the items with the ones from the server
    return {
      ...state,
      categories: action.payload.categories,
      loading: false
    };

    case FETCH_CATEGORIES_FAILURE:
    // All done: set loading "false".
    // Also, replace the items with the ones from the server
    return {
      ...state,
    loading: false,
    error: action.payload.error,
    categories: []
    }

       default: return state;
  }


}

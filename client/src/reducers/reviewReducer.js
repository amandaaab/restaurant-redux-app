import { 
  FETCH_REVIEWS_BEGIN,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  FETCH_CREATE_REVIEW_BEGIN,
  FETCH_CREATE_REVIEW_SUCCESS,
  FETCH_CREATE_REVIEW_FAILURE
  } from '../actions/reviewAction';

const initialState = {
  reviews: [],
  loading: false,
  error: null
};

export default function reviews(state = initialState, action) {
  switch(action.type) {

    case FETCH_REVIEWS_BEGIN:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_REVIEWS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        reviews: action.payload.reviews
      }

      case FETCH_REVIEWS_FAILURE:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
      loading: false,
      error: action.payload.error,
      reviews: []
      }

      case FETCH_CREATE_REVIEW_BEGIN:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: true,
        error: null
      }

      case FETCH_CREATE_REVIEW_SUCCESS: 

      return {
          ...state,
          reviews: state.reviews.concat(action.payload),
          loading: false 
         }


       case FETCH_CREATE_REVIEW_FAILURE:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
      loading: false,
      error: action.payload.error,
      reviews: []
      }

         default: return state;
    }
    
}
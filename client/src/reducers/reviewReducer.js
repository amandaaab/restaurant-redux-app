import { FETCH_REVIEWS_SUCCESS, FETCH_CREATE_REVIEW_SUCCESS } from '../actions/reviewAction';

const initialState = {
  reviews: []
};

export default function reviews(state = initialState, action) {
  switch(action.type) {
    case FETCH_REVIEWS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        reviews: action.payload.reviews
      }

      /*case FETCH_CREATE_REVIEW_SUCCESS: 

      return {
          ...state,
          reviews: [ {name: action.name}, {text: action.text}, {id: action.id}]
      }
*/
    }

    return state;
}
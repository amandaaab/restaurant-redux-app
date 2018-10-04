export function fetchReviews() {

    return dispatch => {
      return fetch("/reviews")
        .then(res => res.json())
        .then(json => {
          dispatch(fetchReviewsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchReviewsError(error)));
    };
}

  export function fetchCreateReview(newName, newText, newId) {

    return dispatch => {
      return fetch("/reviews", {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: newName, text: newText, id: newId})

      })
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCreateReviewsSuccess(json));
          return json;
        })
    };
  }

  export const FETCH_CREATE_REVIEW_SUCCESS = 'FETCH_CREATE_REVIEW_SUCCESS';
  
  export const fetchCreateReviewsSuccess = (json) => ({
    type: FETCH_CREATE_REVIEW_SUCCESS,
    payload: json
  });

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';

export const fetchReviewsSuccess = reviews => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: { reviews }
});
export const fetchReviewsError = error => ({
    type: FETCH_REVIEWS_FAILURE,
    payload: { error }
  });

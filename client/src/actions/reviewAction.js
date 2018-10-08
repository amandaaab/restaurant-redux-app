export function fetchReviews() {

    return dispatch => {
      dispatch(fetchReviewsBegin())
      return fetch("/reviews")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchReviewsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchReviewsError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}



  export function fetchCreateReview(newName, newText, newId, newRating) {

    return dispatch => {
      dispatch(fetchCreateReviewBegin())
      return fetch("/reviews", {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: newName, text: newText, id: newId, rating: newRating})

      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCreateReviewSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCreateReviewError(error)));
    };
  }

  export const FETCH_CREATE_REVIEW_BEGIN = 'FETCH_CREATE_REVIEW_BEGIN';
  export const FETCH_CREATE_REVIEW_SUCCESS = 'FETCH_CREATE_REVIEW_SUCCESS';
  export const FETCH_CREATE_REVIEW_FAILURE = 'FETCH_CREATE_REVIEW_FAILURE';

  export const fetchCreateReviewBegin = () => ({
    type: FETCH_CREATE_REVIEW_BEGIN
  });

  export const fetchCreateReviewSuccess = (json) => ({
    type: FETCH_CREATE_REVIEW_SUCCESS,
    payload: json
  });

  export const fetchCreateReviewError = error => ({
    type: FETCH_CREATE_REVIEW_FAILURE,
    payload: { error }
  });

  
export const FETCH_REVIEWS_BEGIN   = 'FETCH_REVIEWS_BEGIN';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';

export const fetchReviewsBegin = () => ({
  type: FETCH_REVIEWS_BEGIN
});

export const fetchReviewsSuccess = reviews => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: { reviews }
});
export const fetchReviewsError = error => ({
    type: FETCH_REVIEWS_FAILURE,
    payload: { error }
  });

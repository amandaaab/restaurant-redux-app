export function fetchProducts() {
    return dispatch => {
      dispatch(fetchRestaurantsBegin())
      return fetch("/restaurants")
      .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRestaurantsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchRestaurantsError(error)));
    };
  }
  
  
   //Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const FETCH_RESTAURANTS_BEGIN = 'FETCH_RESTAURANTS_BEGIN';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

export const fetchRestaurantsBegin = () => ({
  type: FETCH_RESTAURANTS_BEGIN,
});

export const fetchRestaurantsSuccess = restaurants => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: { restaurants }
});

export const fetchRestaurantsError = error => ({
    type: FETCH_RESTAURANTS_FAILURE,
    payload: { error }
  });


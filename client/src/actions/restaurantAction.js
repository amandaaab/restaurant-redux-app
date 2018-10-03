export function fetchProducts() {
    return dispatch => {
      return fetch("/restaurants")
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsError(error)));
    };
  }
  
  /*
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }*/


export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsSuccess = restaurants => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { restaurants }
});

export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });


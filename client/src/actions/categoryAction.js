export function fetchCategories() {
    return dispatch => {
      dispatch(fetchCategoriesBegin())
      return fetch("/mainCategories")
      .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCategoriesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCategoriesError(error)));
    };
  }
  
   //Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN,
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesError = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error }
  });


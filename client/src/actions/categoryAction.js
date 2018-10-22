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
  

  export function fetchFoodCategories() {
    return dispatch => {
      dispatch(fetchFoodCategoriesBegin())
      return fetch("/foodCategories")
      .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchFoodCategoriesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchFoodCategoriesError(error)));
    };
  }


  export function fetchCityCategories() {
    return dispatch => {
      dispatch(fetchCityCategoriesBegin())
      return fetch("/cityCategories")
      .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCityCategoriesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCityCategoriesError(error)));
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


export const FETCH_FOOD_CATEGORIES_BEGIN = 'FETCH_FOOD_CATEGORIES_BEGIN';
export const FETCH_FOOD_CATEGORIES_SUCCESS = 'FETCH_FOOD_CATEGORIES_SUCCESS';
export const FETCH_FOOD_CATEGORIES_FAILURE = 'FETCH_FOOD_CATEGORIES_FAILURE';

export const fetchFoodCategoriesBegin = () => ({
  type: FETCH_FOOD_CATEGORIES_BEGIN,
});

export const fetchFoodCategoriesSuccess = categories => ({
  type: FETCH_FOOD_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchFoodCategoriesError = error => ({
    type: FETCH_FOOD_CATEGORIES_FAILURE,
    payload: { error }
  });



export const FETCH_CITY_CATEGORIES_BEGIN = 'FETCH_CITY_CATEGORIES_BEGIN';
export const FETCH_CITY_CATEGORIES_SUCCESS = 'FETCH_CITY_CATEGORIES_SUCCESS';
export const FETCH_CITY_CATEGORIES_FAILURE = 'FETCH_CITY_CATEGORIES_FAILURE';

export const fetchCityCategoriesBegin = () => ({
  type: FETCH_CITY_CATEGORIES_BEGIN,
});

export const fetchCityCategoriesSuccess = categories => ({
  type: FETCH_CITY_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCityCategoriesError = error => ({
    type: FETCH_CITY_CATEGORIES_FAILURE,
    payload: { error }
  });


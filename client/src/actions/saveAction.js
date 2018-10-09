export function fetchSavedRestaurants() {

    return dispatch => {
      dispatch(fetchSavedRestaurantsBegin())
      return fetch("/saveRestaurant")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchSavedRestaurantsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchSavedRestaurantsError(error)));
    };
}

export function deleteSavedRestaurant(id) {

  return dispatch => {
    return fetch(`/saveRestaurant/${id}`, {
      method: 'DELETE'
    })
      .then(handleErrors)
      .then(json => {
        return json;
      })
    };
}


export function fetchSaveRestaurant(restaurant) {
    console.log('HÄR FINNS DEN', restaurant.name);

    return dispatch => {
      dispatch(fetchSaveRestaurantBegin())
      return fetch("/saveRestaurant", {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                            name: restaurant.name, 
                            address: restaurant.address,
                            img: restaurant.img,
                            id: restaurant.id,
                            category: restaurant.category,
                            web: restaurant.web,
                            description: restaurant.description,
                        })

      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchSaveRestaurantSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchSaveRestaurantError(error)));
    };
  }

  // Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const FETCH_SAVED_RESTAURANTS_BEGIN = 'FETCH_SAVED_RESTAURANTS_BEGIN';
  export const FETCH_SAVED_RESTAURANTS_SUCCESS = 'FETCH_SAVED_RESTAURANTS_SUCCESS';
  export const FETCH_SAVED_RESTAURANTS_FAILURE = 'FETCH_SAVED_RESTAURANTS_FAILURE';

  export const fetchSavedRestaurantsBegin = () => ({
    type: FETCH_SAVED_RESTAURANTS_BEGIN
  });
  
  export const fetchSavedRestaurantsSuccess = restaurants => ({
    type: FETCH_SAVED_RESTAURANTS_SUCCESS,
    payload: { restaurants }
  });
  export const fetchSavedRestaurantsError = error => ({
      type: FETCH_SAVED_RESTAURANTS_FAILURE,
      payload: { error }
    });


  export const FETCH_SAVE_RESTAURANT_BEGIN = 'FETCH_SAVE_RESTAURANT_BEGIN';
  export const FETCH_SAVE_RESTAURANT_SUCCESS = 'FETCH_SAVE_RESTAURANT_SUCCESS';
  export const FETCH_SAVE_RESTAURANT_FAILURE = 'FETCH_SAVE_RESTAURANT_FAILURE';

  export const fetchSaveRestaurantBegin = () => ({
    type: FETCH_SAVE_RESTAURANT_BEGIN
  });

  export const fetchSaveRestaurantSuccess = (json) => ({
    type: FETCH_SAVE_RESTAURANT_SUCCESS,
    payload: json
  });

  export const fetchSaveRestaurantError = error => ({
    type: FETCH_SAVE_RESTAURANT_FAILURE,
    payload: { error }
  });

  



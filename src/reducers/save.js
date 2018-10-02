const initialState = {
    savedRestaurants: [],
}

const save = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'SAVE') {
      //console.log('det vi har fått med', action.payload);


     const findRestaurant = state.savedRestaurants.find(function(restaurant) {
        return restaurant === action.payload//if restaurant dont exist in the array it returns undefined
      });

      if(findRestaurant === undefined){

        return {
            ...state,
                  savedRestaurants: state.savedRestaurants.concat(action.payload),
            }
        }

      
    }
      //console.log('NYTT STATE', newState);

    return newState;
}

export default save;
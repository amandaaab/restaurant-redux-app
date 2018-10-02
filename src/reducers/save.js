const initialState = {
    savedRestaurants: []
}

const save = (state = initialState, action) => {
   const newState = {...state};
   console.log("I restaurang reducer action", action.payload)
    if(action.type === 'SAVE') {
        return {
            ...state,
            savedRestaurants: state.savedRestaurants.concat(action.payload)
        }
        
        
    }
console.log('NYTT STATE', newState);
console.log("id på restaurang från reducer", action.restaurantSaveID)
    return newState;
}


export default save;
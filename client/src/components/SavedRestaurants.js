import React from 'react';
import RestaurantList from './RestaurantList';


const SavedRestaurants = (props) => {
    return(
  <RestaurantList cat="undefined" restaurants={props.restaurants}/>
    )


}

export default SavedRestaurants;
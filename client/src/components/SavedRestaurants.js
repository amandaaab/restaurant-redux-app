import React from 'react';
import RestaurantList from './restaurant/RestaurantList';


const SavedRestaurants = (props) => {
    return(
      <RestaurantList reviews={props.reviews} restaurants={props.restaurants} cityCat={""} foodCat={""}/>
    )
}

export default SavedRestaurants;
import React from 'react';
import RestaurantList from './RestaurantList';


const SavedRestaurants = (props) => {
    return (
        <RestaurantList reviews={props.reviews} restaurants={props.restaurants}/>
    )
}

export default SavedRestaurants;
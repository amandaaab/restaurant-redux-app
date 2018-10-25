import React, { Component } from 'react';
import RestaurantItem from '../components/restaurant/RestaurantItem';

class ProductPage extends Component {

closeItem = () => {
    window.history.back();
}
  


render(){


    console.log(this.props.restaurants)


    let restauranten =this.props.restaurants.filter(restaurant => 
        restaurant.name === this.props.restaurantName
    )

    console.log(restauranten)
        return (

       
        restauranten.map(restaurant => 
        <RestaurantItem 
                      restaurant={restaurant}
                      reviews={this.props.reviews}
                      handleClick={this.openItem}
                      handleClose={this.closeItem}
      />
      )

                
 
    )
 }

}

export default ProductPage;
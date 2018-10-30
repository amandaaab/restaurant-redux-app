import React, { Component } from 'react';
import RestaurantItem from '../components/restaurant/RestaurantItem';
import { withRouter } from 'react-router';

class ProductPage extends Component {
constructor(props){
    super(props)

this.closeItem = this.closeItem.bind(this)
}

closeItem = () => {
    //window.history.back();
    //this.props.history.goBack();
    console.log(this.props.history)
    this.props.history.push({pathname:`/`, state: this.props.history.location.state})
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
                    key={restaurant.id}
                    restaurant={restaurant}
                    reviews={this.props.reviews}
                    handleClick={this.openItem}
                    handleClose={this.closeItem}
      />
      )

                
 
    )
 }

}

export default withRouter(ProductPage);
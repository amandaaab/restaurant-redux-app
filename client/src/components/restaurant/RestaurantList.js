import React, { Component } from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';


const Container = styled.div `
    display: flex;
    justify-content: center;
    height: auto;
    flex-direction: column;
    align-items: center;
    flex-flow: row wrap;
    font-family: 'Ubuntu', sans-serif;
    background-color: rgb(242, 233, 225);
    margin-top: 6vh;
    width: 100%;
`

class RestaurantList extends Component {  
  constructor(props) {
    super(props)

      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onClose = this.onClose.bind(this)
    }

    onClose = () => {
      window.history.back();
    }

    eachRestaurant = (restaurant) => {
      return(
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      reviews={this.props.reviews}
      /> )
  
  }

      render() {
        if(this.props.restaurantP !== undefined){
          return <RestaurantItem 
                        restaurant={this.props.restaurants}
                        restaurantP={this.props.restaurantP}
                        handleClose={this.onClose}
                        reviews={this.props.reviews}
                        />
          } else {

  
          return (
                <Container>
                  {/*Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item in eachRestaurant() depending on we want all the restaurants or the ones matching a category.*/}
                  {this.props.cat === undefined ? 
                  this.props.restaurants.map((restaurant) =>

                  this.eachRestaurant(restaurant)) 

                : this.props.restaurants.filter(restaurant =>
                  restaurant.category === this.props.cat).map((restaurant) =>
                  
                  this.eachRestaurant(restaurant)) 
                  }    
                </Container>
                )
        }}}
      
  


  RestaurantList.propTypes = {

    restaurants: PropTypes.array.isRequired
  };

export default RestaurantList;

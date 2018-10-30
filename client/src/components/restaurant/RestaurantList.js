import React, { Component } from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';



class RestaurantList extends Component {  
  constructor(props) {
    super(props)

      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.openItem = this.openItem.bind()
    }

    openItem = (restaurant) => {
      this.props.history.push({pathname:`/${restaurant.name}`, state: this.props.saveState})

    }

    eachRestaurant = (restaurant) => {
      return(
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      reviews={this.props.reviews}
                      handleClick={this.openItem}
      /> )
    }
        render() {
          
              return (
                    <Container>

                      {
                        this.props.foodCat.length < 1 & this.props.cityCat.length < 1 ?
                        this.props.restaurants.map(restaurant => 
                          this.eachRestaurant(restaurant) )
                        : null
                      }

                      { 
                        this.props.foodCat.length === 1 & this.props.cityCat.length < 1 ?
                          this.props.restaurants.filter(restaurant =>
                          restaurant.foodId == this.props.foodCat
                          ).map(restaurant => this.eachRestaurant(restaurant) )
                          : null
                      }

                      { 
                        this.props.cityCat.length === 1 & this.props.foodCat.length === 1 ?
                          this.props.restaurants.filter(restaurant =>
                          restaurant.cityId == this.props.cityCat & restaurant.foodId == this.props.foodCat
                          ).map(restaurant => this.eachRestaurant(restaurant) ) 
                          : null
                      }

                      { 
                        this.props.cityCat.length === 1 & this.props.foodCat < 1 ? 
                        this.props.restaurants.filter(restaurant =>
                          restaurant.cityId == this.props.cityCat
                          ).map(restaurant => this.eachRestaurant(restaurant) ) 
                          : null
                      }
                    </Container>
                )
        }
    
        
}


  RestaurantList.propTypes = {

    restaurants: PropTypes.array.isRequired
  };

export default withRouter(RestaurantList);

const Container = styled.div `
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    height: auto;
    flex-direction: column;
    align-items: center;
    flex-flow: row wrap;
    font-family: 'Ubuntu', sans-serif;
    background-color:rgb(224, 226, 229);
    max-width: 100%;
    
    @media all and (max-width: 1090px) and (orientation: landscape){
      background-color: white;
      padding: 0px;
    }

     @media all and (max-width: 760px) {
      background-color: white;
      padding: 0px;
    }

`
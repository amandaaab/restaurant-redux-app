import React, { Component } from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';
import { withRouter } from 'react-router';



class RestaurantList extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      selected: -1,
      selectedRest: -1
    }

      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onClose = this.onClose.bind(this)
      this.openItem = this.openItem.bind()
    }

    openItem = (id, restaurant) => {
      /*this.setState({
        selected: id,
        selectedRest: restaurant
      })*/
      console.log('NAMNET', restaurant.name)

      this.props.history.push({pathname:`/${restaurant.name}`, state: this.props.saveState})

      //this.props.showCategory()
    }

    onClose = () => {
      /*this.setState({
        selectedRest: -1,
        selected: -1,
      })*/
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
          if(this.state.selected !== -1){
            return <RestaurantItem 
                          restaurant={this.state.selectedRest}
                          restaurantP={this.props.restaurantP}
                          handleClose={this.onClose}
                          reviews={this.props.reviews}
                          />
            } else {
             // console.log('dessa har vi fått', this.props.cityCat, this.props.foodCat)
            //this.props.cityCat.length === 1 ? console.log('true') : console.log('false')
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
    

     @media all and (max-width: 760px) {
      background-color: white;
      padding: 0px;


    }

`
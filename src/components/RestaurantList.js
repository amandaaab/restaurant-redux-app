/**
 *
 * RestaurantList
 *
 */

import React from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import CategoryNavbar from './CategoryNavbar';

class RestaurantList extends React.Component {  
  constructor(props) {
    super(props)
      this.state = {
          selected: -1,
          selectedCat: 'alla'
      }

      this.onOpenModal = this.onOpenModal.bind(this)
      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onCloseModal = this.onCloseModal.bind(this)
    }

    onOpenModal = (id) => {
      //console.log('this is the selected id', id)
      this.setState({
        selected: id
      })
    }

    onCloseModal = () => {
      this.setState({
        selected: -1
      })
    }


    eachRestaurant = (restaurant) => {
      return (
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      selectedId={this.state.selected}
                      handleClick={this.onOpenModal}
                      handleClose={this.onCloseModal}
      /> )

    }

      render() {
          return (
            <React.Fragment>

            <div className="restaurantListWrap">

             
              {/*Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item in eachRestaurant().*/}

              {this.props.cat === undefined ? 
              this.props.restaurants.map((restaurant) => this.eachRestaurant(restaurant)) 
              : this.props.restaurants.filter(restaurant => restaurant.category === this.props.cat).map((restaurant) => this.eachRestaurant(restaurant))}
              
            </div>
            </React.Fragment>
          )
          
        }
  }


  RestaurantList.propTypes = {

    restaurants: PropTypes.array.isRequired
  };

export default RestaurantList;

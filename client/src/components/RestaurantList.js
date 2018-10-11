/**
 *
 * RestaurantList
 *
 */

import React, { Component } from "react";
import RestaurantListItem from './RestaurantListItem';
import PropTypes from 'prop-types';
import { FaThumbsDown } from "react-icons/fa";
import RestaurantItem from './RestaurantItem';

class RestaurantList extends Component {  
  constructor(props) {
    super(props)
      this.state = {
          selected: -1,
          selectedCat: 'alla'

      }

      this.onOpen = this.onOpen.bind(this)
      this.eachRestaurant = this.eachRestaurant.bind(this)
      this.onClose = this.onClose.bind(this)
    }

    onOpen = (id) => {
      this.setState({
        selected: id
      })
    }

    onClose = () => {
      this.setState({
        selected: -1
      })
    }

    eachRestaurant = (restaurant, filterRestaurant) => {
      console.log('valt id!!',this.state.selected)

      if(this.props.filterRestaurant){
        return(
        <RestaurantListItem 
      
        key={restaurant.id}
        id={restaurant.id}
        selectedId={this.state.selected}
        handleClick={this.onOpenModal}
        handleClose={this.onClose}
        reviews={this.props.reviews}
        filterRestaurant={this.props.filterRestaurant}
/> )
      }else{
      return (
      <RestaurantListItem 
                      restaurant={restaurant}
                      key={restaurant.id}
                      id={restaurant.id}
                      selectedId={this.state.selected}
                      handleClick={this.onOpen}
                      handleClose={this.onCloseModal}
                      reviews={this.props.reviews}
                      filterRestaurant={this.props.filterRestaurant}
      /> )
    }
  }

      render() {

        if(this.state.selected !== -1){
          return <RestaurantItem 
                        restaurant={this.props.restaurants}
                        //id={restaurant.id}
                        selectedId={this.state.selected}
                        handleClick={this.onOpen}
                        handleClose={this.onClose}
                        reviews={this.props.reviews}
                        filterRestaurant={this.props.filterRestaurant} />
        }

        if(this.props.filterRestaurant){
          return (
           this.props.searchedRestaurant.map(filterRestaurant => 
              this.eachRestaurant(filterRestaurant))
          )
        }else{
          return (
            <div className="restaurantListWrap">
              {/*Loops through the data-array using map(). We are returning <RestaurantListItem/> for each item in eachRestaurant().*/}
              {this.props.cat === undefined ? 
              this.props.restaurants.map((restaurant) => 
              this.eachRestaurant(restaurant)) 

            : this.props.restaurants.filter(restaurant =>
              restaurant.category === this.props.cat).map((restaurant) =>
               this.eachRestaurant(restaurant)) }
              }
               
            </div>
                )
        }}}
  


  RestaurantList.propTypes = {

    restaurants: PropTypes.array.isRequired
  };

export default RestaurantList;

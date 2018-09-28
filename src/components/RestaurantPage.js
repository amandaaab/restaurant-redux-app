/**
 *
 * RestaurantPage
 *
 */

import React from "react";
import RestaurantList from './RestaurantList';
import PropTypes from 'prop-types';
import CategoryNavbar from './CategoryNavbar';
import { connect } from 'react-redux';


class RestaurantPage extends React.Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    
  }
  
  render() {    
    return (
      <div className="restaurantPage">
        <CategoryNavbar/>
           {this.props.cat ? <h2>{this.props.cat}</h2> : <h2>Restauranger</h2>}
        <RestaurantList cat={this.props.cat} restaurants={this.props.restaurants}/>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
      restaurants: state.restaurants.restaurants
  }
}


export default connect(mapStateToProps)(RestaurantPage);

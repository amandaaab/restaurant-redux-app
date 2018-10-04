/**
 *
 * RestaurantPage
 *
 */

import React from "react";
import RestaurantList from './RestaurantList';
import CategoryNavbar from './CategoryNavbar';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/restaurantAction';


class RestaurantPage extends React.Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    
  }

  componentDidMount() {

    this.props.dispatch(fetchProducts());
  
  }

  render() {    
    return (
      <div className="restaurantPage"> 
        <CategoryNavbar/>
        <div className="wrap-restaurantpage">
           {this.props.cat ? <h2>{this.props.cat}</h2> : <h2>Restauranger</h2>}
        <RestaurantList cat={this.props.cat} restaurants={this.props.restaurants}/>
        </div>
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

/**
 *
 * RestaurantPage
 *
 */

import React, {Component} from "react";
//import ReactLoading from 'react-loading';
import RestaurantList from './RestaurantList';
import CategoryNavbar from './CategoryNavbar';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../actions/restaurantAction';
import {fetchReviews} from '../actions/reviewAction';


class RestaurantPage extends Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    
  }

  componentDidMount() {

    this.props.dispatch(fetchRestaurants());
    this.props.dispatch(fetchReviews());
  
  }

  render() {
    

   const { error, loading } = this.props;
    
    if (error) {
            return <div>Error! {error.message}</div>;
        }

    if (loading) {
       return (
         <div className="wrap-spinner">
          
        </div>
       )
      }
    
    return (
      <div className="restaurantPage"> 
        <CategoryNavbar/>
        <div className="wrap-restaurantpage">
           {this.props.cat ? <h2>{this.props.cat}</h2> : <h2>Restauranger</h2>}
        <RestaurantList cat={this.props.cat}
                        restaurants={this.props.restaurants}
                        reviews={this.props.reviews}
                        />
        </div>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
      restaurants: state.restaurants.restaurants,
      loading: state.restaurants.loading,
      error: state.restaurants.error,
      reviews: state.reviews.reviews
  }
}


export default connect(mapStateToProps)(RestaurantPage);

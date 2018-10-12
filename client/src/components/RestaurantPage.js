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

   /*const { error, loading } = this.props;
    
    if (error) {
            return <div>Error! {error.message}</div>;
        }

    if (loading) {
       return (
         <div className="wrap-spinner">
          
        </div>
       )
      }*/
    
    return (
      <div className="restaurantPage"> 
      
        <div className="wrap-restaurantpage">
        

<div className="restaurant-page-wrap-items">


<div className="restaurant-category-wrap">
            <CategoryNavbar/>
</div>
      <div className="restaurant-wrap">
       {this.props.cat ? <h3 className="breadCrumbs">{this.props.cat}</h3> : <h3 className="breadCrumbs">Restauranger</h3>}
       <RestaurantList cat={this.props.cat}
                        restaurantP={this.props.restaurantP}
                        restaurants={this.props.restaurants}
                        reviews={this.props.reviews}
                        />
             </div>
          </div>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
      restaurants: state.restaurants.restaurants,
      //loading: state.restaurants.loading,
      //error: state.restaurants.error,
      reviews: state.reviews.reviews
  }
}


export default connect(mapStateToProps)(RestaurantPage);

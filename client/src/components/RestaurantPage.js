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
    this.state = {
      search: null,
      searchedRestaurant: null
    }
    console.log('params:', this.props.cat);
    this.updateSearch = this.updateSearch.bind(this)
    this.finalSearch = this.finalSearch.bind(this)
  }

  componentDidMount() {

    this.props.dispatch(fetchRestaurants());
    this.props.dispatch(fetchReviews());
  
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substring(0,20)
    })
    this.finalSearch()
  }

  finalSearch = () => {
    this.setState({ searchedRestaurant: this.props.restaurants.filter(
      (restaurant) =>{
         return restaurant.name.indexOf(
           this.state.search) !== -1
      }
    )
  })
  }

  render() {
    // Sök funktion

  //console.log("filteredad array", filteredRestaurants)
  console.log("state searched", this.state.searchedRestaurant)
  

   const { error, loading } = this.props;
  
      if (error) {
          return (
             <div>Error! {error.message}</div>
          );
        }

      if (loading) {
        return (
            <div className="wrap-spinner">      
            </div>
        )
      }
    
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
                        searchedRestaurant={this.state.searchedRestaurant}
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
      loading: state.restaurants.loading,
      error: state.restaurants.error,
      reviews: state.reviews.reviews
  }
}


export default connect(mapStateToProps)(RestaurantPage);

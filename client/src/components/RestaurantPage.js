import React, {Component} from "react";
import ReactLoading from 'react-loading';
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
    // Render error, loading, or resturantpage
    const { error, loading } = this.props;
    
    if (error) {
            return <div>Error! {error.message}</div>;
        }

    else if (loading) {
       return (
         <div className="wrap-spinner">
          <ReactLoading type={'spin'} color={'orange'} height={60} width={30} />
        </div>
       )
      }
    
   else {
     return (

      <div className="restaurantPage"> 
          <div className="wrap-restaurantpage">
              <div className="restaurant-page-wrap-items">

                  <div className="restaurant-category-wrap">
                      <CategoryNavbar/>
                  </div>

                  <div className="restaurant-wrap">
                        
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

import React, {Component} from "react";
import ReactLoading from 'react-loading';
import RestaurantList from '../components/restaurant/RestaurantList';
import CategoryNavbar from '../components/common/CategoryNavbar';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../actions/restaurantAction';
import {fetchReviews} from '../actions/reviewAction';
import Search from '../components/common/Search';


class RestaurantPage extends Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    this.state = {
      filteredArray: null
    }

    this.onSearch = this.onSearch.bind(this)
  } 



  onSearch = (search) => {
    this.setState({
      filteredArray: this.props.restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })
    })
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
                  <Search onSearch={this.onSearch} restaurants={this.props.restaurants}/>
                        
                        {this.state.filteredArray ? 
                          <RestaurantList cat={this.props.cat}
                                            restaurantP={this.props.restaurantP}
                                            restaurants={this.state.filteredArray}
                                            reviews={this.props.reviews}
                                            />

                                            :

                                             <RestaurantList cat={this.props.cat}
                                            restaurantP={this.props.restaurantP}
                                            restaurants={this.props.restaurants}
                                            reviews={this.props.reviews}
                                            />

                        }


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

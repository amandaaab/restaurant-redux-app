import React, { Component } from "react";
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import { fetchRestaurants } from '../actions/restaurantAction';
import { fetchReviews } from '../actions/reviewAction';
import RestaurantList from '../components/RestaurantList'


class HomePage extends Component {

  componentDidMount() {

    //this.props.dispatch(fetchRestaurants())
    //this.props.dispatch(fetchReviews()) 
  }

    
  render() {

    return (
      <div className="homePage">
      <h3>Sök bland Sveriges bästa restauranger</h3>
        <div className="wrapTop">
          <div className="carousel">
            <Carousel width='600px' autoplay={true} withoutControls={true} autoplayInterval={3000}>
            {this.props.restaurants.map((restaurant, i) => <img className='carouselImg' key={i} alt="restaurang" src={require(`../images/${restaurant.img}`)}/>)}
            </Carousel>
          </div>
          <div className="textBox">
                <p>Sök bland flera tusen restauranger ...</p>
                <button>Kom igång</button>
          </div>
        </div>

        <div className="wrapBottom">
        <h4>Bäst omdömen</h4>
        <RestaurantList restaurants={this.props.restaurants}
                        reviews={this.props.reviews}
                        />
        </div>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  reviews: state.reviews.reviews
});

export default connect(mapStateToProps)(HomePage);

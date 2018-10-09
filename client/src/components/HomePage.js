/**
 *
 * HomePage
 *
 */

import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/restaurantAction';
import Carousel from 'nuka-carousel';

//import SavedRestaurants from './SavedRestaurants'


class HomePage extends Component {

    
  render() {
    return (
      <div className="homePage">
         <br></br><br></br>
          <h1>Välkommen!</h1>
      <Carousel autoplay={true} autoplayInterval={2000}>
      <img src={require("../images/spizo.jpg")}/>
      <img src={require("../images/foodcorner.jpeg")}/>
      <img src={require("../images/unpoco.jpg")}/>
      </Carousel>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.restaurantList.restaurantList,
});

export default connect(mapStateToProps)(HomePage);

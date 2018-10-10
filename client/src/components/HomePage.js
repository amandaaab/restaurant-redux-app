/**
 *
 * HomePage
 *
 */

import React, {Component} from "react";
import {connect} from 'react-redux';
import Carousel from 'nuka-carousel';


class HomePage extends Component {

    
  render() {
    return (
      <div className="homePage">
         <br></br><br></br>
          <h1>Välkommen!</h1>
      <Carousel autoplay={true} autoplayInterval={2000}>
      <img alt="restaurang" src={require("../images/spizo.jpg")}/>
      <img alt="restaurang" src={require("../images/foodcorner.jpeg")}/>
      <img alt="restaurang" src={require("../images/unpoco.jpg")}/>
      </Carousel>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.restaurantList.restaurantList,
});

export default connect(mapStateToProps)(HomePage);

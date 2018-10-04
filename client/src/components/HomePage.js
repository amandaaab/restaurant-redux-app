/**
 *
 * HomePage
 *
 */

import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/restaurantAction';
//import SavedRestaurants from './SavedRestaurants'


class HomePage extends Component {

    componentDidMount () {
      /* fetch('/api/customers')
       .then(res => res.json())
       .then(customers => this.setState({
         customers
       }))
  
      fetch('/restaurants')
      .then(res => res.json())
      .then(restaurants => this.setState({
        restaurants
      }))*/
        this.props.dispatch(fetchProducts());
     }

  render() {
    //console.log("loggar lie", this.props.restaurantList.map(restaurant => restaurant.name))
    return (
      <div className="homePage">
         <br></br><br></br>
          <h1>Välkommen!</h1>
          <div>{this.props.restaurantList.map(restaurant => <li key={restaurant.id}>{restaurant.name + restaurant.description}</li>)}</div>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.restaurantList.restaurantList,
});

export default connect(mapStateToProps)(HomePage);

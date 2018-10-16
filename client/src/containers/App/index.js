/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage';
import RestaurantPage from '../RestaurantPage';
import SavePage from '../SavePage';
import NavBar from '../../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
//import { connect } from 'http2';??
import { connect } from 'react-redux';
import { fetchReviews, fetchCreateReview } from '../../actions/reviewAction';
import { fetchRestaurants } from '../../actions/restaurantAction';
import { fetchSavedRestaurants } from '../../actions/saveAction';



class App extends Component {


  componentDidMount(){
    this.props.dispatch(fetchReviews());
    this.props.dispatch(fetchRestaurants());
    this.props.dispatch(fetchSavedRestaurants());

  }

  render(){
  return (

    //Add switch to router 

    <Router>    
    <React.Fragment>
     <NavBar/>
   
      <Route path="/" exact strict render={
        ()=> {
          return (<HomePage/>);
        }
      }/>

      <Route path="/restauranger" exact strict render={
        ()=> {
          return (<RestaurantPage />);
        }
      }/>

      <Route path="/restauranger/:cat" exact strict render={({match})=>(
           <RestaurantPage cat={match.params.cat}/>
        )}/>

        <Route path="/favoriter" exact strict render={
        ()=> {

          return (<SavePage />);
        }
      }/>

      <Route path="/restauranger/:cat/:restaurantP" exact strict render={({match})=>(
                   <RestaurantPage restaurantP={match.params.restaurantP}
                                    cat={match.params.cat}
                   />
)}/>



      </React.Fragment>
  </Router>
    
  );
      }
}

const mapStateToProps = (state) => {
  return {
      reviews: state.reviews.reviews,
      loading: state.reviews.loading,
      error: state.reviews.error
  }
}


export default connect(mapStateToProps)(App);
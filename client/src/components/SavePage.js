/**
 *
 * SavePage
 *
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import SavedRestaurants from './SavedRestaurants'
import { fetchSavedRestaurants } from "../actions/saveAction";
import { fetchReviews } from "../actions/reviewAction";


class SavePage extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

    this.props.dispatch(fetchSavedRestaurants());
    this.props.dispatch(fetchReviews()); //need to fetch othervise favorites dont have any reviews/ratings
  
  }
   
  render() {
    return (
      <div className="savePage">
        <h1>Dina favorit restauranger</h1>
        <SavedRestaurants reviews={this.props.reviews} restaurants={this.props.save} />
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
      save: state.save.savedRestaurants,
      loading: state.save.loading,
      error: state.save.error,
      reviews: state.reviews.reviews
  }
}

export default connect(mapStateToProps)(SavePage);

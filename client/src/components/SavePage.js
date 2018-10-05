/**
 *
 * SavePage
 *
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import SavedRestaurants from './SavedRestaurants'
import { fetchSavedRestaurants } from "../actions/saveAction";


class SavePage extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

    this.props.dispatch(fetchSavedRestaurants());
  
  }
   
  render() {
    return (
      <div className="savePage">
        <h1>Dina favorit restauranger</h1>
        <SavedRestaurants restaurants={this.props.save} />
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
      save: state.save.savedRestaurants,
      loading: state.save.loading,
      error: state.save.error
  }
}

export default connect(mapStateToProps)(SavePage);

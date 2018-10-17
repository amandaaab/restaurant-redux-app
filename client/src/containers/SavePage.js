import React, { Component } from "react";
import { connect } from 'react-redux';
import SavedRestaurants from '../components/SavedRestaurants';
import styled from 'styled-components';


class SavePage extends Component { 

   
  render() {
    return (
      <SaveContainer>
        <h3>Sparade restauranger</h3>
        {(this.props.save).length === 0 ? <p>Du har inga sparade restauranger</p> : null} 
        <SavedRestaurants reviews={this.props.reviews} restaurants={this.props.save} />
      </SaveContainer>
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


const SaveContainer = styled.div `
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{

    }
`

export default connect(mapStateToProps)(SavePage);


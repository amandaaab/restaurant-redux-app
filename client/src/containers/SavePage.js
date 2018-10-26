import React, { Component } from "react";
import { connect } from 'react-redux';
import SavedRestaurants from '../components/SavedRestaurants';
import styled from 'styled-components';


class SavePage extends Component { 

   
  render() {
    return (
      <SaveContainer>
        <div className="headText">
          <h3></h3>
          {(this.props.save).length === 0 ? <h3>Du har inga sparade restauranger</h3> : <h3>Dina sparade restauranger</h3>} 
        </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    h3{

    }
`

export default connect(mapStateToProps)(SavePage);


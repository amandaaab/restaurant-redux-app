import React, { Component } from "react";
import { connect } from 'react-redux';
import SavedRestaurants from '../components/SavedRestaurants';
import styled from 'styled-components';
import img from '../images/dessert.jpg';

class SavePage extends Component { 

   
  render() {
    return (
      <SaveContainer>
        <div className="headText">
          {(this.props.save).length === 0 ? <h3>Du har inga sparade restauranger</h3> : <h3>Dina sparade restauranger</h3>} 
        </div>
        <div className ="saveWrap"></div>
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

    .headText {
      background-image: url(${img});
      width: 100%;
      height: 300px;
      background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    }
    h3{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: black;
      padding: 24px;
      font-weight: bolder;
    }

    .saveWrap {
      margin-top: 50px;
    }

  
`

export default connect(mapStateToProps)(SavePage);


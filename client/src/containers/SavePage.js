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
          <h3 className="fav">Favoriter</h3>
        </div>
        {(this.props.save).length === 0 ? <h3 className="savedR">Du har inga sparade restauranger</h3> : <h3>Dina sparade restauranger</h3>} 
        <div className ="saveWrap">
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

    .headText {
      background-image: url(${img});
      width: 100%;
      height: 300px;
      background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 700px) {
     height: 220px;
    
    }
 
    }
    .fav{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: black;
      padding: 18px;
      font-weight: bolder;
    }

    .savedR{
      padding: 0px;
      margin: 0px;
    }

    .saveWrap {
      margin-top: 20px;

    @media all and (max-width: 900px) {

    
    }
 
    }

  
`

export default connect(mapStateToProps)(SavePage);


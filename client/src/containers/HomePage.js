import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import img from '../images/test.jpg';
import Autosuggest from 'react-autosuggest';
import { NavLink } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';





class HomePage extends Component {

  constructor() {
    super();
 
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    return inputLength === 0 ? [] : this.props.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
getSuggestionValue = suggestion => suggestion.name;
  
renderSuggestion = suggestion => (
    <div>
       <NavLink className="containerSuggestion" to={`/${suggestion.name}`} exact>

       <p>{suggestion.name} - </p><p className="searchImg"></p>
       </NavLink>
    </div>
  );
   



  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
   
    
  render() {

    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Sök restaurang här..',
      value,
      onChange: this.onChange
    };

    return (
      <Container>
        <TopContent>
              <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
        </TopContent>

        <BottomContent>
            
              <RestaurantPage restaurants={this.props.restaurants}
                              reviews={this.props.reviews}
                              />
        </BottomContent>
      </Container>
    );
    
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  reviews: state.reviews.reviews
});

export default connect(mapStateToProps)(HomePage);


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 100%;
    max-width: 100%;
    background-color:  white;

`

const BottomContent = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`

const TopContent = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top:0;

    @media all and (max-width: 700px) {
      height: 260px;
    }



    .containerSuggestion {
      display:flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    .react-autosuggest__input {
  width: 240px;
  height: 30px;
  padding: 10px 20px;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.react-autosuggest__container {
  position: relative;
  /*margin-bottom: 200px;*/
}

.react-autosuggest__input {
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.react-autosuggest__input--focused {
  outline: none;
}

.react-autosuggest__input--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.react-autosuggest__suggestions-container {
  display: block;
}

.react-autosuggest__suggestions-container--open {
  display: block;
  position: absolute;
  /*top: 51px;*/
  width: 280px;
  border: 1px solid #aaa;
  background-color: #fff;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 2;
}

.react-autosuggest__suggestions-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.react-autosuggest__suggestion {
  cursor: pointer;
  padding: 10px 20px;
}

.react-autosuggest__suggestion--highlighted {
  background-color: #ddd;
}

.searchImg {
  font-size: 12px;
  font-style: italic;
  color: black;
}

`

import React, { Component } from "react";
import { connect } from 'react-redux';
import RestaurantList from '../components/restaurant/RestaurantList';
import styled from 'styled-components';
import img from '../images/wall.jpg';


class HomePage extends Component {

    
  render() {

    return (
      <Container>
        <TopContent>
              <h2>Kom igång</h2>
        </TopContent>

        <BottomContent>
              <h4>Bäst omdömen</h4>
              <RestaurantList restaurants={this.props.restaurants}
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
    height: 100%;
    width: 100%;
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
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

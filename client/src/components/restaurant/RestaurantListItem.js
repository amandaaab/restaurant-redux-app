import React from "react";
import PropTypes from 'prop-types';
import SaveRestaurant from '../../containers/SaveRestaurant';
import CalculateRate from '../CalculateRate'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Component
class RestaurantListItem extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
        const { name, img, category} = this.props.restaurant;    
        const { id } = this.props;
    
        return (
          
        <Container>
            
                 <Image onClick={() => this.props.handleClick(id, this.props.restaurant)} alt="restaurant" src={require(`../../images/${img}`)}/>

              <Content>
                  <TextSection>
                      <div onClick={() => this.props.handleClick(id, this.props.restaurant)} className="card-title">{name}</div>
                    <h5 className="body-text">{category}</h5>
                 </TextSection>

              <IconSection>
                <div className="icon">
                  <SaveRestaurant from={'renderRestaurant'} restaurantToSave={this.props.restaurant} />
                </div>
                  <CalculateRate reviews={this.props.reviews} id={id}/>
              </IconSection>                         
            </Content>
          </Container>
        )
    }
  }

   RestaurantListItem.propTypes = {
      restaurant: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        id: PropTypes.number, 
        category: PropTypes.string,
      }),
};

export default RestaurantListItem;

// Style
const Container = styled.div`
   margin: 1% 1%;
    font-family: 'Ubuntu', sans-serif;   
    box-shadow: 1px 2px 6px #d6d5d3;
    color: rgb(0, 0, 0);
    /*margin:20px;*/
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const Image = styled.img`
    cursor: pointer;
    width: 340px;
    height: 220px;
`

const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`

const TextSection = styled.div `
   .card-title {
    width: 100%;
    bottom: 0;
    margin-bottom: -5px;
    cursor: pointer;
    }

    .body-text {
    font-style: italic;
    font-size: 12px;
    }

      margin-right: 40px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
`

const IconSection = styled.div `
  .icon {
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

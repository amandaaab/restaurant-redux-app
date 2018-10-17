import React from "react";
import PropTypes from 'prop-types';
import SaveRestaurant from '../../containers/SaveRestaurant';
import CalculateRate from '../CalculateRate'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Component
const RestaurantListItem = (props) => {

        const { name, img, category} = props.restaurant;    
        const { id } = props;
    
        return (
          
        <Container>
              <NavLink to={`/restauranger/${category}/${name}`} exact>
                 <Image alt="restaurant" src={require(`../../images/${img}`)}/>
              </NavLink>

              <Content>
                  <TextSection>
                    <NavLink to={`/restauranger/${category}/${name}`} exact>
                      <div className="card-title">{name}</div>
                    </NavLink>
                    <h5 className="body-text">{category}</h5>
                 </TextSection>

              <IconSection>
                <div className="icon">
                  <SaveRestaurant from={'renderRestaurant'} restaurantToSave={props.restaurant} />
                </div>
                  <CalculateRate reviews={props.reviews} id={id}/>
              </IconSection>                         
            </Content>
          </Container>
        )
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

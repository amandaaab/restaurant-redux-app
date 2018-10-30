import React from "react";
import PropTypes from 'prop-types';
import SaveRestaurant from '../../containers/SaveRestaurant';
import CalculateRate from '../CalculateRate'
import styled from 'styled-components';

const RestaurantListItem = (props) => {

        const { name, img, category} = props.restaurant;    
        const { id } = props;
    
        return (
        <Container>  
               <Image onClick={() => props.handleClick(props.restaurant)} alt="restaurant" src={require(`../../images/${img}`)}/>
              <Content>
                  <TextSection>
                      <div onClick={() => props.handleClick(props.restaurant)} className="card-title">{name}</div>
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
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid rgb(239, 240, 242);
    max-width: 100%;

    @media all and (max-width: 500px) {
     max-width: 100%;
     margin: 0px;
     border: none;
    }
    @media all and (min-width: 400px) and (max-width: 1024px) and (orientation: landscape ){
        margin: 1px;
    }
 
`
const Image = styled.img`
    cursor: pointer;
    width: 320px;
    height: 220px;
`

const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding:5px;
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

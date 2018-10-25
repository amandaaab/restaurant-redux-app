import React from 'react';
import SaveRestaurant from '../../containers/SaveRestaurant';
import ReviewParent from '../../containers/ReviewParent';
import CalculateRate from '../CalculateRate';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';


const RestaurantItem = (props) => {

    const { restaurant } = props;
    console.log('restaurangen', restaurant)
    console.log('restaurangens namn', restaurant.name)

      
    return (
            
        <Container>        
            <CloseBtn onClick={props.handleClose}><FaArrowLeft className="faArrowLeft"/></CloseBtn>
            <Content>
                <RestaurantContent>
                <img alt="restaurant" className="image" src={require(`../../images/${restaurant.img}`)} />

                    <InfoWrapper>  
                        <LeftBox>
                            <h3 className=".name">{restaurant.name}</h3>
                            <div>{restaurant.category}</div>
                            <div >{restaurant.web}</div>
                            <div >{restaurant.address}</div>
                        </LeftBox>

                        <RightBox>
                            <div className="rateDiv">
                                <CalculateRate 
                                    reviews={props.reviews}
                                    id={restaurant.id} 
                                />
                            </div>
                                <div className="saveDiv">
                                        <SaveRestaurant restaurantToSave={restaurant} />
                                </div>
                        
                        </RightBox>
                    </InfoWrapper>
                    </RestaurantContent>
                    <ReviewContent>
                        <ReviewParent name={restaurant.name} id={restaurant.id}/>         
                </ReviewContent>     
            </ Content>
        </Container>
    )  
}

export default RestaurantItem;



const Container = styled.div`
width: 100%;
background-color: white;
padding: 30px 110px;
font-family: 'Source Sans Pro', sans-serif;
background-color: lightcoral;


.faArrowLeft {
    font-size: 20px;
    cursor: pointer;
    margin-right: 120px;
}

.faArrowLeft:hover {
    color: rgb(112, 112, 112);
}
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color: lightblue;

    .image {
    width: 600px;
    max-height: 360px;

}

`
const RestaurantContent = styled.div `
    display: flex;
    justify-content: space-around;
    background-color: lightgray;

`

const ReviewContent = styled.div `
    width: 100%;
    background-color: red;
`

const CloseBtn = styled.div`
    width: 80px;
    position: relative;
    top:0;
`



const LeftBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const RightBox = styled.div`
   /* width: 30%;*/
   /* height: auto;*/
    display: flex;
    flex-direction: column;


    .rateDiv {
        margin: 4px;
        width: 150px;
    }
    .saveDiv {
        margin: 4px;

    }
    
`


const InfoWrapper = styled.div`
   
`

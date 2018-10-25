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

                            <h3 className="name">{restaurant.name}</h3>
                                <div className="category">{restaurant.category}</div>
                                <div className="rateDiv">
                                <CalculateRate 
                                    reviews={props.reviews}
                                    id={restaurant.id} 
                                />
                            </div>
                    
                            <div class="information">
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida justo. Donec vel lectus et nunc tincidunt pellentesque eget quis justo. Vestibulum ut lorem dignissim, posuere tellus non, accumsan dolor. Vestibulum rhoncus fermentum odio ac eleifend. </div>
                            </div>
                            <a>{restaurant.web}</a>
                            <div>{restaurant.address}</div>
                        </LeftBox>

                        <RightBox>
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
background-color: rgb(224, 226, 229);


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
    background-color: white;
    .image {
    width: 600px;
    max-height: 360px;

}

`
const RestaurantContent = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*flex-flow: row wrap;*/

    .category {
        margin-top: -8px;
        font-style: italic;
    }
    .information {
        width: 90%;
        padding: 30px;
    }

    .rateDiv {
        margin-top: 14px;
    }

    a {
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline; 
    }
`

const ReviewContent = styled.div `
    width: 100%;
    background-color: rgb(252, 252, 252);
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
        display: flex;
        justify-content: flex-end;
        padding: 16px 60px;
    }
    
    
`


const InfoWrapper = styled.div`
   
`

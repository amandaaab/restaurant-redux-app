import React from 'react';
import SaveRestaurant from '../../containers/SaveRestaurant';
import ReviewParent from '../../containers/ReviewParent';
import CalculateRate from '../CalculateRate';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';


const RestaurantItem = (props) => {
      
    return (
            //Filter restaurant where one restaurant name matches the clicked restaurant name, restaurantP is sent from router
            props.restaurant.filter(restaurant => restaurant.name === props.restaurantP).map((restaurant) => 

                <Container>
                            
                    <CloseBtn onClick={props.handleClose}><FaArrowLeft className="faArrowLeft"/></CloseBtn>
                        
                    <div>
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
            
                            <ReviewParent name={restaurant.name} id={restaurant.id}/>              
                            
                    </div>
                </Container>
                  
                
            )

    )  

}

export default RestaurantItem;



const Container = styled.div`

.image {
    width: 700px;
    max-height: 420px;   
}

.faArrowLeft {
    font-size: 22px;
    cursor: pointer;
}

.faArrowLeft:hover {
    color: rgb(112, 112, 112);
}
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
    .name {
        margin-left: 35px;
    }

`

const RightBox = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 34px;

    .rateDiv {
        margin: 4px;
        width: 150px;
    }
    .saveDiv {
        margin: 4px;

    }
`


const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 200px auto;
    width: 100%;
`

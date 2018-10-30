import React from 'react';
import SaveRestaurant from '../../containers/SaveRestaurant';
import ReviewParent from '../../containers/ReviewParent';
import CalculateRate from '../CalculateRate';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';


const RestaurantItem = (props) => {

    const { restaurant, reviews } = props;
      
    return (
            
        <Container>        
            <CloseBtn onClick={props.handleClose}><FaArrowLeft className="faArrowLeft"/></CloseBtn>
            <Content>
                <RestaurantContent>
                    <div className="imageDiv">
                <img alt="restaurant" className="image" src={require(`../../images/${restaurant.img}`)} />
                    </div>
                    <InfoWrapper>  
                        <LeftBox>

                            <h3 className="name">{restaurant.name}</h3>
                                <div className="category">{restaurant.category}</div>
                                <div className="rateDiv">
                                <CalculateRate 
                                    reviews={reviews}
                                    id={restaurant.id} 
                                />
                            </div>
                    
                            <div className="information">
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida justo. Donec vel lectus et nunc tincidunt pellentesque eget quis justo. Vestibulum ut lorem dignissim, posuere tellus non, accumsan dolor. Vestibulum rhoncus fermentum odio ac eleifend. </div>
                            </div>
                            <a>{restaurant.web}</a>
                            <div>{restaurant.address}</div>
                        </LeftBox>

                                <div className="saveDiv">
                                        <SaveRestaurant restaurantToSave={restaurant} />
                                </div>
                        
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
padding: 30px 100px;
font-family: 'Source Sans Pro', sans-serif;
background-color: rgb(224, 226, 229);

@media all and (max-width: 1400px) {
       padding: 10px 50px;
    }

@media all and (max-width: 1200px) {
       padding: 5px 10px;
    }



@media all and (max-width: 1050px) {
       padding: 0px;
       background-color: white;
    }




.faArrowLeft {
    font-size: 20px;
    cursor: pointer;
    margin-left: 20px;
    @media all and (max-width: 900px) and (orientation: landscape) {
        margin-left: 30px;
        font-size: 25px;
}

 @media all and (min-width: 900px) and (orientation: landscape) {
        font-size: 30px;
        margin: 5%;
}

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
    
    @media all and (max-width: 900px) {
        width: 600px;
        height: 360px;
}


@media all and (max-width: 750px) {
        width: 400px;
        height: 230px;
}

@media all and (max-width: 450px) {
        width: 350px;
        height: 210px;
}

    @media all and (max-width: 370px) {
        width: 300px;
        height: 180px;
}

    @media all and (max-width: 900px) and (orientation: landscape) {
        width: 350px;
        height: 210px;
    }

}

`
const RestaurantContent = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    @media all and (max-width: 900px) and (orientation: portrait) {
        margin-top: 5%;
        display: flex;
       flex-direction: column;
        align-items: center;
}

  @media all and (max-width: 700px) and (orientation:landscape) {
        display: flex;
       flex-direction: column;
        align-items: center;
}


    .imageDiv {
        @media all and (max-width: 900px) and (orientation: landscape) {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    }

    .category {
        margin-top: -8px;
        font-style: italic;
    }
    .information {
        width: 90%;
        padding: 30px;

         @media all and (max-width: 1200px){

            width: 95%;
            padding:15px;
        }

        @media all and (max-width: 1000px){

            width: 100%;
            padding:15px;
            }

            @media all and (max-width: 900px){

                width: 90%;
                padding:30px;
                text-align: center;
            }

            @media all and (max-width: 900px) and (orientation: landscape) {
                 width: 100%;
                 padding-left: 0px;
            }
    }

    .rateDiv {
        margin-top: 14px;
        @media all and (max-width: 1000px){
             margin-top: 10px;
         }

         @media all and (max-width: 900px){
             margin-top: 14px;
         }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

     .name {
         
         @media all and (max-width: 1000px){
             font-size: 18px;
         }
         @media all and (max-width: 900px){
             font-size: 24px;
         }
}
`

    



const InfoWrapper = styled.div`

 @media all and (max-width: 900px) and (orientation: landscape) {
    width: 50%;
    }

.saveDiv {
    display: flex;
    justify-content: flex-end;
    padding: 16px 60px;

      @media all and (max-width: 1200px){
        padding: 10px 30px;
}


    }
  

   
`

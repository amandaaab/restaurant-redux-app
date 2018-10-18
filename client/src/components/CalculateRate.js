import React from 'react';
import styled from 'styled-components';

const CalculateRate = (props) => {

    // Create an array and put all ratings from reviews inside
    let numbersArray = [];
    props.reviews.filter(review => review.id === props.id).map((review, i) => { 
        numbersArray.push(review.rating)
        return numbersArray;
    })

    let result;
    //if the restaurant don't have reviews/ratings yet. 
    if(numbersArray.length === 0){
        result = 0
    // Count Average value of ratings
    } else { 
            var numberOfRates = numbersArray.length;
            let ratingResult = numbersArray.reduce((a,b) => a+b,0) / numberOfRates;
            result = ratingResult.toFixed(1);
    }
// Fill the stars depending on average rating
const starTotal = 5;
  const starPercentage = (result / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  var starStyle = {
      width: starPercentageRounded
  }
 
return (

    <StarContainer>
        <div className="stars-outer">
            <div className="stars-inner" style={starStyle}></div>
        </div>
        <div className="StarResult">({result})</div>
    </StarContainer>

    )
}

const StarContainer = styled.div `
    display: flex;
    justify-content: center;
    width: 100px auto;

    
  .stars-outer::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: rgb(196, 196, 196);
   
  }
   
  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    color: #F1BF98;
    
   
  }
   
  .stars-inner::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: #0A5172;
  
  }

  .stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
  
  }

  .StarResult {}
`
    
export default CalculateRate;
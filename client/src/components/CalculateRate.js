import React from 'react';

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
    
        <div className="wrap-star">
            <div className="stars-outer">
                <div className="stars-inner" style={starStyle}></div>
            </div>
            <div className="result">({result})</div>
    </div>
)

}

    
export default CalculateRate;
import React from 'react';

const CalculateRate = (props) => {

    let numbersArray = [];
    props.reviews.filter(review => review.id === props.id).map((review, i) => { 
        numbersArray.push(review.rating)
        return numbersArray;
        //console.log("nummer arayensssss", numbersArray)
    })

    var numberOfRates = numbersArray.length;
    let ratingResult = numbersArray.reduce((a,b) => a+b,0) / numberOfRates;
    let result = ratingResult.toFixed(1);
   // console.log(result);

   //console.log("ratin resultatet", ratingResult)

const starTotal = 5;
  const starPercentage = (result / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  var starStyle = {
      width: starPercentageRounded
  }
 
return (
    <div> 
        <div className="wrap-star">
        <div className="stars-outer">
            <div className="stars-inner" style={starStyle}></div>
        </div>
        <div className="result">({result})</div>
    </div>
    </div>
)

}
    
export default CalculateRate;
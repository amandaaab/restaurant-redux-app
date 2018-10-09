import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa';



const CalculateRate = (props) => {

    let numbersArray = [];
    props.reviews.filter(review => review.id === props.id).map((review, i) => { 
        numbersArray.push(review.rating)
        //console.log("nummer arayensssss", numbersArray)
    })

    var numberOfRates = numbersArray.length;
    let ratingResult = numbersArray.reduce((a,b) => a+b,0) / numberOfRates;
   // let result = ratingResult.toFixed();
   // console.log(result);

   //console.log("ratin resultatet", ratingResult)

const starTotal = 5;
  const starPercentage = (ratingResult / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  var starStyle = {
      width: starPercentageRounded
  }
 

  /*  var numberOfRates = numbersArray.length;
    let ratingResult = numbersArray.reduce((a,b) => a+b,0) / numberOfRates;
    let result = ratingResult.toFixed();
    console.log(result);*/
    
return (
    <div>
        <div className="stars-outer">
            <div className="stars-inner" style={starStyle}></div>
        </div>
    </div>
)

    
  /*  let numbersArray = [];
    props.reviews.filter(review => review.id === props.id).map((review, i) => { 
        numbersArray.push(review.rating)
        console.log(numbersArray)
    })

    var numberOfRates = numbersArray.length;
    let ratingResult = numbersArray.reduce((a,b) => a+b,0) / numberOfRates;
    let result = ratingResult.toFixed();
    console.log(result);

    let stars;
    let color="red";

    switch(result){

    case '5' :
        stars = <div>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                </div>
        break;
    
    case '4' :
       stars = <div>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar color={color}/>
                    <FaStar />

                    </div>
    break;

}
*/
    /*const arr = [ 
            0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
            1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
            2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 1.8, 1.9,
            3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
            4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9,
            5.0
    ]
*/

}
/*
var hej = [1, 2, 3, 4, 5]

hej.forEach(function(amanda) {
    
    console.log("hejsanaaaa", amanda);
    return
    ( <FaStar />)
});
    */
    
export default CalculateRate;
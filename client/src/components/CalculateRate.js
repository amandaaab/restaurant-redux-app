import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa';


const CalculateRate = (props) => {
    
    let numbersArray = [];
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

    return (
        <div>
            {stars}
            </div>
    )


}

export default CalculateRate;
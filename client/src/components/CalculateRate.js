import React from 'react';

const CalculateRate = (props) => {

    let numbersArray = [];
    
    props.reviews.filter(review => review.id === props.id).map((review, i) => {
       return (
           <div>
           {numbersArray.concat(review.rating)}
           </div>
           )

    })

    return (
        <div></div>
    )


}

export default CalculateRate;
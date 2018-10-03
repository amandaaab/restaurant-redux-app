import React from 'react';


    const Reviews = (props) => {
        
        return(
        <React.Fragment>
            <button onClick={props.display}>Se recenssioner</button>
            {props.isDisplayed ? (
                props.reviews.filter(review => review.id === props.id).map((review, i) => 
                                <div key={i}>
                                    <p>{review.name} : {review.text} </p>
                                </div>)
            ) : null }

                    </React.Fragment>
        )

    
}
  export default Reviews;
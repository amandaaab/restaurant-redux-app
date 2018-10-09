import React from 'react';


const Reviews = (props) => {
    return(
        <React.Fragment>
            <button onClick={props.display}>Se recenssioner</button>
            {props.isDisplayed ? (
                props.reviews.filter(review => review.id === props.id)
                
                                .map((review, i) => 
                                        <div key={i}>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                <th>Namn</th>
                                                <th>Recension</th>
                                                <th>Betyg</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{review.name}</td>
                                                    <td>{review.text}</td>
                                                    <td>{review.rating}</td>
                                                </tr>
                                            </tbody>
                                       </table>
                                        </div>
                                          
                                       )
            ) : null }

        </React.Fragment>
    )

    
}

export default Reviews;
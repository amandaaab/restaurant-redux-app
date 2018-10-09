import React from 'react';


const Reviews = (props) => {
    return(
        <React.Fragment>
            
<h3>Omdömen</h3>
<table className="table">
<thead>
    <tr>
    <th>Namn</th>
    <th>Recension</th>
    <th>Betyg</th>
    </tr>
</thead>
               {props.reviews.filter(review => review.id === props.id).slice(0,3)

                                .map((review, i) => 
                                        
                                            <tbody>
                                                <tr>
                                                    <td>{review.name}</td>
                                                    <td>{review.text}</td>
                                                    <td>{review.rating}</td>
                                                </tr>
                                            </tbody>
                                          
                                       )}
            {props.isDisplayed ? (


               props.reviews.filter(review => review.id === props.id).slice(3)

                .map((review, i) => 
                        
                            <tbody>
                                <tr>
                                    <td>{review.name}</td>
                                    <td>{review.text}</td>
                                    <td>{review.rating}</td>
                                </tr>
                            </tbody>
                          
                       )



            ) : null}
                                       </table>


                    {props.isDisplayed ? (
                                     <button className="show-hide" onClick={props.display}>Visa mindre...</button>

                    ) :              <button className="show-hide" onClick={props.display}>Visa mer...</button>}







        </React.Fragment>
    )

    
}

export default Reviews;
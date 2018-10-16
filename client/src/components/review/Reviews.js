import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Component
const Reviews = (props) => {
    return(
        <React.Fragment>
            
                <h3>Omdömen</h3>
                <Table className='table'>
                <thead>
                    <tr>
                    <th>Namn</th>
                    <th>Recension</th>
                    <th>Betyg</th>
                    </tr>
                </thead>
               {props.reviews.filter(review => review.id === props.id).slice(0,3)

                                .map((review, i) => 
                                        
                                            <tbody key={i}>
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
                                       </Table>


                    {props.isDisplayed ? (
                                     <button className="show-hide" onClick={props.display}>Visa mindre...</button>

                    ) :              <button className="show-hide" onClick={props.display}>Visa mer...</button>}







        </React.Fragment>
    )

    
}


Reviews.propTypes = {

    id: PropTypes.number.isRequired,
    isDisplayed: PropTypes.bool,
    display: PropTypes.func,
    reviews: PropTypes.arrayOf(Object)
  };


export default Reviews;

// Style
const Table = styled.table`
    width: 90%;
`
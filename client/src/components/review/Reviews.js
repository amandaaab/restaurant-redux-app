import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Component
const Reviews = (props) => {
    return(
        <Container>
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
                                        )
                                    }

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
                        ) : null }
                </Table>


                {props.isDisplayed ? (
                        <ShowHide onClick={props.display}>Visa mindre...</ShowHide> )  
                    :   <ShowHide onClick={props.display}>Visa mer...</ShowHide>
                }

        </Container>
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

const Container = styled.div `
  padding: 0px 40px;
  padding-bottom: 20px;

  @media all and (max-width: 700px) {
       padding: 0px 5px;
       padding-bottom: 10px;
    }

  h3 {
        margin-bottom: 40px; 
    
        @media all and (max-width: 500px) {
            margin-bottom: 15px;
        }
    }

`
const Table = styled.table`
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
`

const ShowHide = styled.div`
    border: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
`
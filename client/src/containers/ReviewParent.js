import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Reviews from '../components/review/Reviews'
import ReviewForm from '../components/review/ReviewForm'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCreateReview } from '../actions/reviewAction';


class ReviewParent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayList : false,
            displayForm : false,
        }

        this.displayReviews = this.displayReviews.bind(this)
        this.displayForm = this.displayForm.bind(this)
        this.saveReview = this.saveReview.bind(this)
    }


    displayReviews = () => {
        
        this.setState({
            displayList : !this.state.displayList
             })
    
    }

    displayForm = () => {
        this.setState({
            displayForm : !this.state.displayForm
        })
    }

    saveReview = (newName, newText, newId, newRating) => {

           this.props.dispatch(fetchCreateReview(newName, newText, newId, newRating));
    
            this.setState({
              displayForm : !this.state.displayForm,
              displayList: true              
            })
        }
        

    render() {

        const { error, loading } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        else if (loading) {
            return (
                    <Spinner>
                          <ReactLoading type={'spin'} color={'orange'} height={60} width={30} />
                    </Spinner>
            )
        } else {

            const { displayList, displayForm} = this.state;
            const { id, reviews, name } = this.props;

            return (
                <Container>

                    <div className="reviews">
                        <Reviews    id={id}
                                    reviews={reviews}
                                    isDisplayed={displayList}
                                    display={this.displayReviews} 
                                />
                    </div>
                    <div className="review-form">
                            <ReviewForm 
                                    id={id}
                                    name={name}
                                    isDisplayed={displayForm} 
                                    display={this.displayForm} 
                                    reviews={reviews} 
                                    saveThis={this.saveReview}
                                    />
                    </div>
                </Container>
            )

        }
    }
}

ReviewParent.propTypes = {

    id: PropTypes.number.isRequired
  };


const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews,
        loading: state.reviews.loading,
        error: state.reviews.error
    }
  }
 
 
  export default connect(mapStateToProps)(ReviewParent);

  const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items:  center;
    height: 30%;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    margin-top:20px;
    flex-direction: row;
    @media all and (max-width: 700px) {
       flex-direction: column-reverse;
    }

    .review-form {
        width: 40%;

        @media all and (max-width: 700px) {
            display: flex;
            justify-content:center;
            width: 100%;
    }
    }


    .reviews {
    width: 100%;
 
}
`






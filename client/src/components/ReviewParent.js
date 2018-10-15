import React, { Component } from 'react';
//import ReactLoading from 'react-loading';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviews, fetchCreateReview } from '../actions/reviewAction';


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

    componentDidMount() {

        this.props.dispatch(fetchReviews());
      
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
                <div className="wrap-spinner">loading...</div>
            )
        } else {

            const { displayList, displayForm} = this.state;
            const { id, reviews } = this.props;

            return (
            <div className="reviewWrap">

            <div className="see-review">
                    <Reviews    id={id}
                                reviews={reviews}
                                isDisplayed={displayList}
                                display={this.displayReviews} 
                               />
            </div>
            <div className="create-review">
                        <ReviewForm 
                                id={id}
                                isDisplayed={displayForm} 
                                display={this.displayForm} 
                                reviews={reviews} 
                                saveThis={this.saveReview}
                                />
                                </div>
                </div>
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








import React, { Component } from 'react';
//import ReactLoading from 'react-loading';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
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
        
        /*let newReview = {
            name: newName,
            text: newText,
            id: newId
        }*/

           // this.props.onCreate(newName, newText, newId)
           this.props.dispatch(fetchCreateReview(newName, newText, newId, newRating));
            console.log('NYTTTT NAMN', newName, newRating)
        
    
        //this.props.onCreate(newReview)
        /*this.setState(prevState => ({
                reviews: [
                    ...prevState.reviews,
                    {
                        name: newName,
                        text : newText,
                        id : newId 
                    }
                ]
            }))*/
    
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

        if (loading) {
            return (
                <div className="wrap-spinner"></div>
            )
        }

        

        const { displayList, displayForm} = this.state;
        const { id } = this.props;

        return (
          <div className="reviewWrap">

          <div className="see-review">
                <Reviews    id={id}
                            reviews={this.props.reviews}
                            isDisplayed={displayList}
                            display={this.displayReviews} 
                            />
</div>
<div className="create-review">
                <ReviewForm 
                            id={id}
                            isDisplayed={displayForm} 
                            display={this.displayForm} 
                            reviews={this.props.reviews} 
                            saveThis={this.saveReview}
                            />
                            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews,
        loading: state.reviews.loading,
        error: state.reviews.error
    }
  }
 

 
  export default connect(mapStateToProps)(ReviewParent);








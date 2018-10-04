import React, { Component } from 'react';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux';
import { fetchReviews, fetchCreateReview } from '../actions/reviewAction';
//import store from '../index'


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

/*
    componentDidMount() {

        this.props.dispatch(fetchCreateReview(newName, newText, newId));
    
    }

    */

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

    saveReview = (newName, newText, newId) => {
        
        /*let newReview = {
            name: newName,
            text: newText,
            id: newId
        }*/

           // this.props.onCreate(newName, newText, newId)
           this.props.dispatch(fetchCreateReview(newName, newText, newId));
            console.log('NYTTTT NAMN', newName)
        
    
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

        const { displayList, displayForm} = this.state;
        const { id } = this.props;

        return (
            <div>
                <button>hej</button>

                <Reviews    id={id}
                            reviews={this.props.reviews}
                            isDisplayed={displayList}
                            display={this.displayReviews} 
                            />

                <ReviewForm 
                            id={id}
                            isDisplayed={displayForm} 
                            display={this.displayForm} 
                            reviews={this.props.reviews} 
                            saveThis={this.saveReview}
                            />

               
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews
    }
  }
  
  /*
  
  const mapDispatchToProps = (dispatch) => {
    return {
    onCreate: (newName, newText, newId) => dispatch(fetchCreateReview({name: newName, text: newText, id: newId}))
    }
  }

*/




  
  
  export default connect(mapStateToProps)(ReviewParent);








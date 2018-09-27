import React, { Component } from 'react';
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'


class ReviewParent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayList : false,
            displayForm : false,
            reviews : [
                {
                    name : "Alice",
                    text : "Trevlig personal och god mat!",
                    id : 0
                },
                {
                    name : "Stefan",
                    text : "Fin utsikt, bra mat.",
                    id: 1
                },
                {
                    name : "Anna",
                    text : "Mysigt ställe, bästa personalen.",
                    id: 1
                },
                {
                    name : "Anna",
                    text : "Mysigt ställe, bästa personalen.",
                    id: 2
                },
                {
                    name : "Anna",
                    text : "Mysigt ställe, bästa personalen.",
                    id: 2
                },
                {
                    name : "Alice",
                    text : "Trevlig personal och god mat!",
                    id : 4
                },
                {
                    name : "Alice",
                    text : "Trevlig personal och god mat!",
                    id : 5
                },

            ]
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

    saveReview = (newName,newText, newId) => {
       
        this.setState(prevState => ({
                reviews: [
                    ...prevState.reviews,
                    {
                        name: newName,
                        text : newText,
                        id : newId 
                    }
                ]
            }))
    
            this.setState({
              displayForm : !this.state.displayForm,
              displayList: true              
            })

        }
        

    render() {

        const { reviews, displayList, displayForm} = this.state;
        const { id } = this.props;

        return (
            <div>

                <Reviews    id={id}
                            reviews={reviews}
                            isDisplayed={displayList}
                            display={this.displayReviews} 
                            />

                <ReviewForm 
                            id={id}
                            isDisplayed={displayForm} 
                            display={this.displayForm} 
                            reviews={reviews} 
                            saveThis={this.saveReview}
                            />

               
            </div>
        )
    }
}

export default ReviewParent;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from '../Ratings';
import styled from 'styled-components';


class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ratingNumber: null
        }

        this.save = this.save.bind(this)   
        this.showSum = this.showSum.bind(this)
    }

    save = (e) => {
        e.preventDefault()
        this.props.saveThis(this._newName.value, this._newText.value, this.props.id, this.state.ratingNumber)
    }

    showSum = (ratingNumber) => {

        this.setState({
            ratingNumber: ratingNumber
        })
    }

    render(){

        return(
            
        <div>
            {this.props.isDisplayed ? null: (
                <CreateReviewButton onClick={this.props.display}>Ge ditt omdöme</CreateReviewButton>
            )}

            {this.props.isDisplayed ? (
            <Form onSubmit={this.save}>
            <div className="form-group">
            <label className="label-for-rating">Ge ditt betyg</label>
            <StarRating sendSum={this.showSum}/>
            <label>Ditt namn</label>
            <input name="namn" type="text" className="form-control" placeholder="Namn" ref={(input)=> this._newName = input}/>
            <label>Ditt omdöme</label>
                <textarea name="text" className="form-control" placeholder="Berätta om din upplevelse..."
                        ref={(input) => this._newText = input}/>


                <SubmitButton className="btn btn-primary">Skicka</SubmitButton>
                </div>
                </Form> ) : null
            }
        </div>
        )
    }
}

ReviewForm.propTypes = {
    id: PropTypes.number.isRequired,
    isDisplayed: PropTypes.bool,
    display: PropTypes.func,
    reviews: PropTypes.arrayOf(Object),
    saveThis: PropTypes.func

  };

export default ReviewForm;


const CreateReviewButton = styled.button`
    border: none;
    background: none;
    text-decoration: underline;
    font-size: 16px;
    font-weight: bolder;
    color: rgb(58, 59, 61);
    &:hover {
        color: rgb(98, 100, 100);
    }
    &:active {
        color: rgb(0, 0, 0);
    }
`

const Form = styled.form `

.label-for-rating {
 margin-bottom: -20px;
}
.label-for-name {
    margin-top:-50px;
}
`
const SubmitButton = styled.button `

`
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from './Ratings';


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
               <button className="create-review-button" onClick={this.props.display}>Ge ditt omdöme</button>
        )}

        {this.props.isDisplayed ? (
        <form onSubmit={this.save}>
        <div className="form-group">
        <label className="label-for-rating">Ge ditt betyg</label>
        <StarRating sendSum={this.showSum}/>

        <label>Ditt namn</label>
        <input  className="label-for-name" name="namn" type="text" className="form-control" placeholder="Namn" ref={(input)=> this._newName = input}/>
        <label>Ditt omdöme</label>
            <textarea name="text" className="form-control" placeholder="Berätta om din upplevelse..."
                    ref={(input) => this._newText = input}/>


            <button className="btn btn-primary" id="save">Spara</button>
            </div>
            </form> ) : null
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

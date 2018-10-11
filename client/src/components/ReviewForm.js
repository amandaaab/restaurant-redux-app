import React, { Component } from 'react';
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
        console.log('recenssion:' , this._newText.value, this._newName.value, this.state.ratingNumber);  
        this.props.saveThis(this._newName.value, this._newText.value, this.props.id, this.state.ratingNumber)
        console.log('recensionID', this.props.id, this.state.ratingNumber)
    }

    showSum = (ratingNumber) => {

        this.setState({
            ratingNumber: ratingNumber
        })
        //console.log('totalsumman i form', ratingNumber)
    }

    render(){
    return(


    <div>
        {this.props.isDisplayed ? null : (
               <button className="create-review-button" onClick={this.props.display}>Ge ditt omdöme</button>
        )}

        {this.props.isDisplayed ? (
            <form onSubmit={this.save}>
                <div class="form-group">
                    <label className="label-for-rating">Ge ditt betyg</label>
                    <StarRating sendSum={this.showSum}/>

                    <label for="namn">Ditt namn</label>
                    <input  className="label-for-name" name="namn" type="text" class="form-control" placeholder="Namn" ref={(input)=> this._newName = input}/>

                    <label for="text">Ditt omdöme</label>
                    <textarea name="text" class="form-control" placeholder="Berätta om din upplevelse..."
                              ref={(input) => this._newText = input}/>
                              
                    <button class="btn btn-primary" id="save">Spara</button>
                </div>
            </form> ) : null
        }
    </div>
    )
}
}

export default ReviewForm;

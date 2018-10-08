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
        <button onClick={this.props.display}>Skriv recenssion</button>


        {this.props.isDisplayed ? (
        <form onSubmit={this.save}>
        <StarRating sendSum={this.showSum}/>

        <input type="text" placeholder="Namn" ref={(input)=> this._newName = input}/>
            <textarea 
                    ref={(input) => this._newText = input}/>


            <button id="save">Spara</button>
            </form> ) : null
        }
    </div>
    )
}
}

export default ReviewForm;

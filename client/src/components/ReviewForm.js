import React, { Component } from 'react'

class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.save = this.save.bind(this)
        
    }


    save = (e) => {
        e.preventDefault()
            console.log('recenssion:' , this._newText.value, this._newName.value);  
        this.props.saveThis(this._newName.value, this._newText.value, this.props.id)
        console.log('recensionID', this.props.id)
    }


    render(){
    return(


    <div>
        <button onClick={this.props.display}>Skriv recenssion</button>

        {this.props.isDisplayed ? (
        <form onSubmit={this.save}>

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

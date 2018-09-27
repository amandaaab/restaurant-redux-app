import React, {Component} from 'react';

class SaveRestaurant extends Component {

    constructor(props) {
        super(props)

if(localStorage.savedArray){
      let ParsedArray = JSON.parse(localStorage.getItem("savedArray"));
      const result = ParsedArray.find(parsedObj => parsedObj.id === this.props.restaurantToSave.id)
      if(result !== undefined){
          this.state = {
              isSaved: 'Sparad'
          }
      } else {
        this.state = {
            isSaved : 'Spara'
        }
    }
} else {
    this.state = {
        isSaved : 'Spara'
    }
}


        this.save = this.save.bind(this)
    }


    save = () => {
        console.log('Resturang att spara', this.props.restaurantToSave)

        
      if(!localStorage.savedArray){
        let restaurantArray = [];
        localStorage.setItem("savedArray", JSON.stringify(restaurantArray));  
      }
  
      let ParsedArray = JSON.parse(localStorage.getItem("savedArray"));
        console.log('parsedarray', ParsedArray)
        const result = ParsedArray.find(parsedObj => parsedObj.id === this.props.restaurantToSave.id)
        console.log('result', result)
        if(result === undefined){

        ParsedArray.push(this.props.restaurantToSave);
        localStorage.setItem("savedArray", JSON.stringify(ParsedArray));
        console.log('sparad array: ',ParsedArray);

        this.setState({
            isSaved : 'Sparad!'
        })

    } else {
        alert('restaurangen är redan sparad')
    }
    
    
    }


    render() {
        return (
            <div>
                 <button onClick={this.save}>{this.state.isSaved}</button>
            </div>
           
        )
    }
}

export default SaveRestaurant;
import React, {Component} from 'react';
import {connect} from 'react-redux';

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

       
    }

/*
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
*/
   /* save = (props) => {
        console.log("restauranger i save", this.props.restaurantToSave)
        this.props.onSave(this.props.restaurantToSave)
    }*/


    render() {
        return (
            <div>
                 <button onClick={() => this.props.onSave(this.props.restaurantToSave)}>hej</button>
            </div>
           
        )
    }
}


const mapStateToProps = (state) => {
    return {
        save: state.save.save
    }
}
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
    onSave: (restaurantSaveID) => dispatch({type:'SAVE', payload: restaurantSaveID})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(SaveRestaurant);
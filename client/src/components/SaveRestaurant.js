import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant } from '../actions/saveAction';



class SaveRestaurant extends Component {

    constructor(props) {
        super(props)
       
    }


    save = (restaurant) => {
        console.log("restauranger jag vill spara", restaurant)
        //this.props.onSave(this.props.restaurantToSave)
        this.props.dispatch(fetchSaveRestaurant(restaurant));

    }


    render() {
        return (
            <div>
                 <button onClick={() => this.save(this.props.restaurantToSave)}>Spara</button>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        save: state.save.save,
    }
  }



export default connect(mapStateToProps)(SaveRestaurant);
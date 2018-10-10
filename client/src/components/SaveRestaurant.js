import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant, fetchSavedRestaurants, deleteSavedRestaurant } from '../actions/saveAction';
import { FaTrashAlt } from 'react-icons/fa';

class SaveRestaurant extends Component {
    
    constructor(props) {
        super(props)
       
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchSavedRestaurants());

    }

    delete = (id) => {
        console.log('att radera', id);
        this.props.dispatch(deleteSavedRestaurant(id));
    }

    save = (restaurant) => {
        console.log("restaurangen jag vill spara", restaurant)
        //this.props.onSave(this.props.restaurantToSave)
        this.props.dispatch(fetchSaveRestaurant(restaurant));
    }

    render() {
        const { restaurantToSave, save } = this.props;
        console.log('sparade restauranger??', save)
        console.log('vill spara denna restaurang:', restaurantToSave)
       
        let button = <button className="saveButton" onClick={() => this.save(restaurantToSave)}>Spara</button>

        if(save.filter(saved => saved.id === restaurantToSave.id).length !== 0){
            if(this.props.from === 'renderRestaurant'){
            button = <FaTrashAlt onClick={() => this.delete(restaurantToSave.id)}></FaTrashAlt>
                } else {
            button = <button className="delButton" onClick={() => this.delete(restaurantToSave.id)}>Ta bort</button>
                }
        }

        return (
            <div>
                {button}
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //save: state.save.save,
        save: state.save.savedRestaurants,
    }
  }

export default connect(mapStateToProps)(SaveRestaurant);
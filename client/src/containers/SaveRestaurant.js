import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant, fetchSavedRestaurants, deleteSavedRestaurant } from '../actions/saveAction';
import { FaHeart } from 'react-icons/fa';

class SaveRestaurant extends Component {
    
    constructor(props) {
        super(props)
       
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
       // this.props.dispatch(fetchSavedRestaurants());
    }

    delete = (id) => {
        this.props.dispatch(deleteSavedRestaurant(id));
    }

    save = (restaurant) => {
        this.props.dispatch(fetchSaveRestaurant(restaurant));
    }

    render() {
        const { restaurantToSave, save } = this.props;
        
        let button; 

        // Save restaurants
        if(this.props.from === 'renderRestaurant'){
            button = <FaHeart className='saveHeart' onClick={() => this.save(restaurantToSave)}></FaHeart>
                } else {
             button = <button className="saveButton" onClick={() => this.save(restaurantToSave)}>Spara</button>
            }

        // Delete restaurants
        if(save.filter(saved => saved.id === restaurantToSave.id).length !== 0){
            if(this.props.from === 'renderRestaurant'){
            button = <FaHeart className="delHeart" onClick={() => this.delete(restaurantToSave.id)}></FaHeart>
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
        save: state.save.savedRestaurants,
    }
  }

export default connect(mapStateToProps)(SaveRestaurant);
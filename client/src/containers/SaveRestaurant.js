import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant, deleteSavedRestaurant } from '../actions/saveAction';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';




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
            <Button>
                {button}
            </Button>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        save: state.save.savedRestaurants,
    }
  }

export default connect(mapStateToProps)(SaveRestaurant);

const Button = styled.div `
  .saveHeart {
    opacity: 0.4;
    color: rgb(32, 92, 172);
  }
  .saveHeart:hover{
    color:#e03f3f;
    opacity: 1;
  }

  .delHeart {
    color:#e03f3f;
    opacity: 1;
  }
  .delHeart:hover{
    opacity: 0.4;
    color: rgb(32, 92, 172);
  }

  .delButton {
    width: 150px;
    height: 25px;
    border-style: none;
    background: #e03f3f;
    border-radius: 3px;
    color: white;
    box-shadow: 3px 2px 4px#a52626;
    cursor: pointer;
}
.saveButton{
    width: 150px;
    height: 25px;
    border-style: none;
   background: rgb(32, 92, 172);
    border-radius: 3px;
    box-shadow: 2px 2px 4px rgb(24, 71, 131);
    cursor: pointer;
    color: white;
}
`
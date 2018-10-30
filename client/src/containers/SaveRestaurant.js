import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant, deleteSavedRestaurant } from '../actions/saveAction';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';




class SaveRestaurant extends Component {
    
    constructor(props) {
        super(props)
       
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
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
            button = <FaRegHeart className='saveHeart' onClick={() => this.save(restaurantToSave)}></FaRegHeart>
                } else {
             button = <FaRegHeart className="saveButton" onClick={() => this.save(restaurantToSave)}>Spara</FaRegHeart>
            }

        // Delete restaurants
        if(save.filter(saved => saved.id === restaurantToSave.id).length !== 0){
            if(this.props.from === 'renderRestaurant'){
            button = <FaHeart className="delHeart" onClick={() => this.delete(restaurantToSave.id)}></FaHeart>
                } else {
            button = <FaHeart className="delButton" onClick={() => this.delete(restaurantToSave.id)}>Ta bort</FaHeart>
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
    color: rgb(221, 79, 86);
  }
  .saveHeart:hover{
    color:darkred;
    opacity: 1;
  }

  .delHeart {
    color:#e03f3f;
    opacity: 1;
    color: rgb(221, 79, 86);
  }

  .delButton {
    font-size: 22px;
    color:rgb(221, 79, 86);
    cursor: pointer;
}
.saveButton{
    font-size: 22px;
    cursor: pointer;
    color: rgb(221, 79, 86);
}
`
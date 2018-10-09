import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSaveRestaurant, fetchSavedRestaurants, deleteSavedRestaurant } from '../actions/saveAction';



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
    

       
        let button;

        if (!Array.isArray(save) || !save.length) {
            button = <button onClick={() => this.save(restaurantToSave)}>Spara</button>
        } else {

        save.map(saves => {
            
           
            if(saves.name === restaurantToSave.name){

            button = <button onClick={()=> this.delete(restaurantToSave.id)}>Ta bort som sparad</button>;
            } 
            else if(saves.name !== restaurantToSave.name) {
            button = <button onClick={() => this.save(restaurantToSave)}>Spara</button>
            }
            

            return button;
        })

        return button;

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
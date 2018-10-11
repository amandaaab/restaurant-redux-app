/**
 *
 * RestaurantListItem
 *
 */
import React, {Component} from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import SaveRestaurant from './SaveRestaurant';
import ReviewParent from './ReviewParent';
import CalculateRate from './CalculateRate'


class RestaurantListItem extends Component {

  constructor(props){
    super(props) 
  
    this.renderRestaurant = this.renderRestaurant.bind(this)
  }
  
    renderRestaurant = (props) => {
        const { name, img, category} = this.props.restaurant;    
        const { id } = this.props;
      
        return (
        <div className="restaurantCard">

              <img onClick={() => this.props.handleClick(id)} alt="restaurant" className="listImage" src={require(`../images/${img}`)}/>

              <div className="restaurant-card-info">
                 <div class="restaurant-card-text">
                <h4 onClick={() => this.props.handleClick(id)} className="inCardText">{name}</h4>
                
                <h5 className="inCardCategory">{category}</h5>
              </div>

              <div className="restaurant-card-stars-icons">
                
                <div className="icon"><SaveRestaurant from={'renderRestaurant'} restaurantToSave={this.props.restaurant} /></div>
                <CalculateRate reviews={this.props.reviews}
                                    id={id}/>
              </div>
                                    
              </div>
            </div>
        )
      

    }

      render() {
        return this.renderRestaurant()
    }
  }
    RestaurantListItem.propTypes = {
      restaurant: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        img: PropTypes.string,
        id: PropTypes.number
      }),
};

export default RestaurantListItem;

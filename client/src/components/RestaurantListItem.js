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
import { NavLink } from 'react-router-dom';



const RestaurantListItem = (props) => {
  
        const { name, img, category} = props.restaurant;    
        const { id, cat, restaurantP } = props;
        console.log(cat, restaurantP)
      
        return (
        <div className="restaurantCard">

              <NavLink to={`/restauranger/${category}/${name}`} exact><img /*onClick={() => this.props.handleClick(id)}*/ alt="restaurant" className="listImage" src={require(`../images/${img}`)}/></NavLink>

              <div className="restaurant-card-info">
                 <div class="restaurant-card-text">
                 <NavLink to={`/restauranger/${category}/${name}`} exact><h4 /*onClick={() => this.props.handleClick(id)} */className="inCardText">{name}</h4></NavLink>
                
                <h5 className="inCardCategory">{category}</h5>
              </div>

              <div className="restaurant-card-stars-icons">
                
                <div className="icon"><SaveRestaurant from={'renderRestaurant'} restaurantToSave={props.restaurant} /></div>
                <CalculateRate reviews={props.reviews}
                                    id={id}/>
              </div>
                                    
              </div>
            </div>
        )

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

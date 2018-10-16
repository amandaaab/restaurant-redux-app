import React from "react";
import PropTypes from 'prop-types';
import SaveRestaurant from '../containers/SaveRestaurant';
import CalculateRate from './CalculateRate'
import { NavLink } from 'react-router-dom';


const RestaurantListItem = (props) => {

        const { name, img, category} = props.restaurant;    
        const { id } = props;
    
        return (
          
        <div className="restaurantCard">

              <NavLink to={`/restauranger/${category}/${name}`} exact>
                 <img alt="restaurant" className="listImage" src={require(`../images/${img}`)}/>
              </NavLink>

              <div className="restaurant-card-info">
                  <div className="restaurant-card-text">
                    <NavLink to={`/restauranger/${category}/${name}`} exact>
                      <h4 className="inCardText">{name}</h4>
                    </NavLink>
                    <h5 className="inCardCategory">{category}</h5>
                 </div>

              <div className="restaurant-card-stars-icons">
                <div className="icon">
                  <SaveRestaurant from={'renderRestaurant'} restaurantToSave={props.restaurant} />
                </div>
                  <CalculateRate reviews={props.reviews} id={id}/>
              </div>                         
            </div>
          </div>
        )
    }

  /*  RestaurantListItem.propTypes = {
      restaurant: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        id: PropTypes.number, 
        category: PropTypes.string,
      }),
};*/

export default RestaurantListItem;

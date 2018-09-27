/**
 *
 * RestaurantListItem
 *
 */
import React from "react";
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
//import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import SaveRestaurant from './SaveRestaurant';
//import ReviewList from './ReviewList';
import ReviewParent from './ReviewParent';




class RestaurantListItem extends React.Component {

  constructor(props){
    super(props) 
  
    this.renderRestaurantDetails = this.renderRestaurantDetails.bind(this)
    this.renderRestaurant = this.renderRestaurant.bind(this)
  }

    renderRestaurant = (props) => {
        const { name, img } = this.props.restaurant;    
        const { id } = this.props;

        return (
          <div className="restaurantCard" onClick={() => this.props.handleClick(id)}>
              
              <img className="listImage" src={img}/>
              <h3>{name}</h3>
              
          </div>
        )
      }


      renderRestaurantDetails = () => {
     

          console.log('matching restaurant: ', this.props.restaurant)
        
            const { img, name, address } = this.props.restaurant;
    
          return (
             <React.Fragment>
                <div className="restaurantCard">
                  <h2>{name}</h2>
                  <img className="listImage" src={img}/>
                </div>

                <Modal open={true} onClose={this.props.handleClose}>
                  <img className="modalImage" src={img} />
                  <div className="infoWrapper">

                      <div className="boxOne">
                        <h2>{name}</h2>
                        <p>{address}</p>
                      </div>

                      <div className="boxTwo">
                        <SaveRestaurant restaurantToSave={this.props.restaurant} />
                      </div>

                  </div>

                    <ReviewParent id={this.props.restaurant.id}/>
                                         
                          
                </Modal>
              </React.Fragment>

            
        )  

      }

      render() {
        return this.props.selectedId === this.props.restaurant.id ? this.renderRestaurantDetails() : this.renderRestaurant()

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

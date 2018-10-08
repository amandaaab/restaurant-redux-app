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
import StarRating from './Ratings';


class RestaurantListItem extends Component {

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

              <img className="listImage" src={require(`../images/${img}`)}/>
              <h3 className="inCardText">{name}</h3>
              
          </div>
        )
      }


      renderRestaurantDetails = () => {
          console.log('matching restaurant: ', this.props.restaurant)
        
            const { name, address, img } = this.props.restaurant;
    
          return (
             <React.Fragment>
                <div className="restaurantCard">
                  <h2>{name}</h2>
                  <img className="listImage" src={require(`../images/${img}`)}/>
                </div>

                <Modal open={true} onClose={this.props.handleClose}>
                  <img className="modalImage" src={require(`../images/${img}`)} />
                  <div className="infoWrapper">

                      <div className="boxOne">
                        <h2>{name}</h2>
                        <p>{address}</p>
                      </div>

                      <div className="boxTwo">
                        <SaveRestaurant restaurantToSave={this.props.restaurant} />

                        {this.props.reviews.filter(review => review.id === this.props.id).map((review, i) => 
                                <div key={i}>
                                    <p>{review.rating}</p>
                                </div>)}
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

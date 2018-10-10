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
  
    this.renderRestaurantDetails = this.renderRestaurantDetails.bind(this)
    this.renderRestaurant = this.renderRestaurant.bind(this)
  }
  
    renderRestaurant = (props) => {
        const { name, img, category} = this.props.restaurant;    
        const { id } = this.props;
      
        return (
        <div className="restaurantCard">
          <div onClick={() => this.props.handleClick(id)}>

              <img alt="restaurant" className="listImage" src={require(`../images/${img}`)}/>

              <div className="restaurant-card-info">
              <div class="restaurant-card-text">
                <h4 className="inCardText">{name}</h4>
                <h5 className="inCardCategory">{category}</h5>
              </div>
               
                <CalculateRate reviews={this.props.reviews}
                                    id={id}/>
              </div>
             
              </div>
              <SaveRestaurant from={'renderRestaurant'} restaurantToSave={this.props.restaurant} />
          </div>
        )
      }


      renderRestaurantDetails = () => {
          console.log('matching restaurant: ', this.props.restaurant)
        
            const { name, address, img, web, category } = this.props.restaurant;
    
          return (
             <React.Fragment>
                <div className="restaurantCard">
                  <h2>{name}</h2>
                  <img alt="restaurant" className="listImage" src={require(`../images/${img}`)}/>
                </div>

                <Modal open={true} onClose={this.props.handleClose}>
                  <img alt="restaurant" className="modalImage" src={require(`../images/${img}`)} />
                    <div className="restauranten">
                    <h2 className="nameR">{name}</h2>
                    </div>

                  <div className="infoWrapper">
                      <div className="boxOne">   
                          <div className="info">{category}</div>
                          <div className="info">{web}</div>
                          <div className="info">{address}</div>

                      </div>

                      <div className="boxTwo">
                          <div className="rateDiv">
                            <CalculateRate 
                                      reviews={this.props.reviews}
                                      id={this.props.id} 
                                      />
                          </div>
                            <div className="saveDiv">
                            <SaveRestaurant restaurantToSave={this.props.restaurant} />
                           
                            </div>
                        
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

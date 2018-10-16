import React from 'react';
import SaveRestaurant from '../../containers/SaveRestaurant';
import ReviewParent from '../../containers/ReviewParent';
import CalculateRate from '../CalculateRate';
import { FaArrowLeft } from 'react-icons/fa';


const RestaurantItem = (props) => {
      

        return (
            // Filter restaurant where one restaurant name matches the clicked restaurant name, restaurantP is sent from router
            props.restaurant.filter(restaurant => restaurant.name === props.restaurantP).map((restaurant) => 

                <div className="restaurantItem">
                <div>
                    <div className="closeBtn" onClick={props.handleClose}><FaArrowLeft className="faArrowLeft"/></div>
                    </div>
                    <div>
                    <img alt="restaurant" className="modalImage" src={require(`../../images/${restaurant.img}`)} />
    
                    <div className="infoWrapper">  
                  
                        <div className="boxOne">
                        <h3 className="nameR">{restaurant.name}</h3>
                            <div className="info">{restaurant.category}</div>
                            <div className="info">{restaurant.web}</div>
                            <div className="info">{restaurant.address}</div>
                        </div>

                        <div className="boxTwo">
                            <div className="rateDiv">
                              <CalculateRate 
                                        reviews={props.reviews}
                                        id={restaurant.id} 
                                        />
                            </div>
                              <div className="saveDiv">
                              <SaveRestaurant restaurantToSave={restaurant} />
                             
                              </div>
                          
                        </div>
    
                    </div>
    
                      <ReviewParent id={restaurant.id}/>              
                            
                  </div>
                  </div>
                  
                
              )

              

      )  

}




export default RestaurantItem;
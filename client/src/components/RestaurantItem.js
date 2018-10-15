import React from 'react';
import SaveRestaurant from './SaveRestaurant';
import ReviewParent from './ReviewParent';
import CalculateRate from './CalculateRate';


const RestaurantItem = (props) => {
      

        return (
            // Filter restaurant where one restaurant name matches the clicked restaurant name, restaurantP is sent from router
            props.restaurant.filter(restaurant => restaurant.name === props.restaurantP).map((restaurant) => 
            
                <div key={restaurant.id}>
                    <button onClick={props.handleClose}>Stäng</button>
                    <img alt="restaurant" className="modalImage" src={require(`../images/${restaurant.img}`)} />
                      <div className="restauranten">
                      <h2 className="nameR">{restaurant.name}</h2>
                      </div>
    
                    <div className="infoWrapper">
                        <div className="boxOne">   
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
                
              )

              

      )  

}




export default RestaurantItem;
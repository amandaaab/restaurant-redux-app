import React from 'react';
import SaveRestaurant from './SaveRestaurant';
import ReviewParent from './ReviewParent';
import CalculateRate from './CalculateRate'


const RestaurantItem = (props) => {
        console.log('matching restaurant: ', props.restaurant)
        console.log('matching ID', props.selectedId)
        console.log('RESTAURANT PARAM', props.restaurantP)
      
          //const { name, address, img, web, category } = props.restaurant;

        
        return (
            //props.restaurant.filter(restaurant => restaurant.name === props.restaurantP).map(restaurant) =>


            props.restaurant.filter(restaurant => restaurant.name === props.restaurantP).map((restaurant) => 
            
                <div>
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
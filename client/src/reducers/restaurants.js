import { FETCH_PRODUCTS_SUCCESS } from '../actions/restaurantAction';
const initialState = {
   restaurants: [
            /* { 
                name: 'Bellini',
                address: 'Linnegatan 20',
                img: require('../images/spizo.jpg'),
                id: 0,
                category: 'italienskt'
              },
              { 
                name: 'Un Poco L',
                address: 'Vasagatan 4',
               img: require('../images/unpoco.jpg'),
                id: 1,
                category: 'libanesiskt' 
              },
              { 
                name: 'Spizo L',
                address: 'Vasagatan 4',
                img: require('../images/spizo.jpg'),
                id: 2,
                category: 'libanesiskt' 
                
              },
              { 
                name: 'Food Corner',
                address: 'Vasagatan 4',
                img: require('../images/foodcorner.jpeg'),
                id: 3,
                category: 'spanskt'         
              },
              { 
                name: 'Un Poco L',
                address: 'Vasagatan 4',
                img: require('../images/spizo.jpg'),
                id: 4,
                category: 'libanesiskt'
                
              },
              { 
                name: 'Un Poco',
                address: 'Vasagatan 4',
                img: require('../images/unpoco.jpg'),
                id: 5,
                category: 'italienskt'        
              },
              { 
                name: 'Un Poco',
                address: '../Vasagatan 4',
                img: require('../images/unpoco.jpg'),
                id: 6,
                category: 'italienskt'        
              },
              { 
                name: 'Un Pocosist L',
                address: 'Vasagatan 4',
                img: require('../images/unpoco.jpg'),
                id: 7,
                category: 'libanesiskt'        
              }*/
        ]
        
}

export default function restaurants(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
       //All done: set loading "false".
     //  Also, replace the items with the ones from the server
      return {
        ...state,
        restaurants: action.payload.restaurants
      };

    }

    return state;

 
}

//const restaurants = (state = initialState, action) => {
    //const newState = {...state};
    /*if(action.type === 'SHOW') {
        return {
            ...state,
            reviews: state.reviews
        }
        
    }*/

    //return newState;
//}


//export default restaurants;
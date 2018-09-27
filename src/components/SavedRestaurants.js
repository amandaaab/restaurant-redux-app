import React from 'react';

    const SavedRestaurants = (props) => {


        if(localStorage.savedArray){
        let showRestaurants = JSON.parse(localStorage.getItem("savedArray"));    
        console.log('sparade', showRestaurants);

        const restaurantItems = showRestaurants.map((item,i) => {
        return (
            <div key={i}>
                <p>{item.name}</p>
                <img className="listImage" src={item.img}/>
        </div>
        );

    })
        return (
            <div>{restaurantItems}</div>
        )
        } else {
            return <div>inga sparade</div>
        }

}

export default SavedRestaurants;
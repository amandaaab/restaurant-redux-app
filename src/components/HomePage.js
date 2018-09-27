/**
 *
 * HomePage
 *
 */

import React from "react";
import SavedRestaurants from './SavedRestaurants'



class HomePage extends React.Component {
   
  render() {
    return (
      <div className="homePage">
        <h1>Dina favorit restauranger</h1>
        <SavedRestaurants />
      </div>
    );
    
  }
}

export default HomePage;

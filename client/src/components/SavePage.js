/**
 *
 * SavePage
 *
 */

import React, {Component} from "react";
import SavedRestaurants from './SavedRestaurants'


class SavePage extends Component {
   
  render() {
    return (
      <div className="savePage">
        <h1>Dina favorit restauranger</h1>
        <SavedRestaurants />
      </div>
    );
    
  }
}

export default SavePage;

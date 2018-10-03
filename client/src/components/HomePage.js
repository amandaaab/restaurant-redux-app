/**
 *
 * HomePage
 *
 */

import React, {Component} from "react";
//import SavedRestaurants from './SavedRestaurants'


class HomePage extends Component {
   constructor(){
     super()
     this.state = {
       customers: []
     }
   }

   componentDidMount() {
     fetch('/api/customers')
     .then(res => res.json())
     .then(customers => this.setState({
       customers
     }))
   }

  render() {
    return (
      <div className="homePage">
      <br></br><br></br>
        <h1>Välkommen!</h1>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName}</li>)}
        </ul>
      </div>
    );
    
  }
}

export default HomePage;

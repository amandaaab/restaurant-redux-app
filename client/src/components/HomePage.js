/**
 *
 * HomePage
 *
 */

import React, {Component} from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/restaurantActions';
//import SavedRestaurants from './SavedRestaurants'


class HomePage extends Component {
   constructor(){
     super()
     this.state = {
       customers: [],
       dogs: []
     }
   }

   componentDidMount() {

    this.props.dispatch(fetchProducts());

    /* fetch('/api/customers')
     .then(res => res.json())
     .then(customers => this.setState({
       customers
     }))

     fetch('/dogs')
     .then(res => res.json())
     .then(dogs => this.setState({
       dogs
     }))*/
   }

  /*render() {
    return (
      <div className="homePage">
      <br></br><br></br>
        <h1>Välkommen!</h1>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName}</li>)}
        </ul>
        <ul>
          {this.state.dogs.map((dog,i) =>
            <li key={i}>{dog.type} and name: {dog.name}</li>)}
        </ul>


        <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
      </div>
    );
    
  }*/

  render() {
    const { error, loading, products } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
  }
}



export default connect(mapStateToProps)(HomePage);
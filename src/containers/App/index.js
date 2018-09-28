/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import RestaurantPage from '../../components/RestaurantPage';
import NavBar from '../../components/NavBar';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';


export default function App() {
  return (


    <Router>    
    <React.Fragment>
     <NavBar/>
   
      <Route path="/" exact strict render={
        ()=> {
          return (<HomePage/>);
        }
      }/>

      <Route path="/restauranger" exact strict render={
        ()=> {

          return (<RestaurantPage/>);
        }
      }/>

      <Route path="/restauranger/:cat" exact strict render={({match})=>(
           <RestaurantPage cat={match.params.cat}/>
        )}/>


      </React.Fragment>
  </Router>
    
  );
}

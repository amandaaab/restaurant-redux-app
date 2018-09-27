import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Navbar = () => {
    return (
    <div className="navbar">
    <NavLink className="navItem" activeClassName="selected" to="/" exact><FaHome/></NavLink>
    <NavLink className="navItem" activeClassName="selected" to="/restauranger" exact>restauranger</NavLink>   
</div>
    )
}

export default Navbar; 
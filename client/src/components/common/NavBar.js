import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Navbar = () => {
    return (
    <div className="navbar">
    <NavLink className="navItem" activeClassName="selected" to="/" exact><FaHome/></NavLink>
    <NavLink className="navItem" activeClassName="selected" to="/restauranger" exact>Restauranger</NavLink> 
    <NavLink className="navItem" activeClassName="selected" to="/favoriter" exact>Favoriter</NavLink>     
</div>
    )
}

export default Navbar; 
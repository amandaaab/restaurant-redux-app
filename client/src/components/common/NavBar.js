import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';



// Component
const Navbar = () => {
    return (
    <Container>
        <NavLink className="navItem" activeClassName="selected" to="/" exact><FaHome/></NavLink>
        <NavLink className="navItem" activeClassName="selected" to="/restauranger" exact>RESTAURANGER</NavLink> 
        <NavLink className="navItem" activeClassName="selected" to="/favoriter" exact>FAVORITER</NavLink>     
    </Container>
    )
}

export default Navbar; 

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 94px;
    z-index: 1;
    background-color: white;
  /* box-shadow: 2px 2px 2px #0A5172*/
 /* border-bottom: 2px solid rgb(194, 155, 158);*/

    

.navItem {
    font-family: 'Source Sans Pro', sans-serif;
    color: BLACK;
    font-size: 22px;
    margin: 2%;
    cursor: pointer;
    text-decoration: none;
}

.selected {
    text-decoration: underline;
    color: rgb(46, 46, 46);
}

`
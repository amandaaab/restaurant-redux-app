import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';



// Component
const Navbar = () => {
    return (
    <Container>
        <NavLink className="navItem" activeClassName="selected" to="/" exact><FaHome/></NavLink>
        <NavLink className="navItem" activeClassName="selected" to="/restauranger" exact>Restauranger</NavLink> 
        <NavLink className="navItem" activeClassName="selected" to="/favoriter" exact>Favoriter</NavLink>     
    </Container>
    )
}

export default Navbar; 

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.315);

.navItem {
    color: rgb(63, 63, 63);
    font-size: 18px;
    font-weight: bolder;
    margin: 2%;
    cursor: pointer;
    text-decoration: none;
}

.selected {
    text-decoration: underline;
    color: rgb(46, 46, 46);
}

`
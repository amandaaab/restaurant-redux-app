import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';


// Component
class Navbar extends Component {
   

   
    render(){
    
        return (
            <div>
                <Container>
                    <NavLink className="navItem" activeClassName="selected" to="/" exact><FaHome/></NavLink>
                    <h3>RESTAURANGKARTAN</h3>
                    <NavLink className="navItem" activeClassName="selected" to="/favoriter" exact>FAVORITER</NavLink> 
                </Container>
    
          </div>       
    )
}
}

export default Navbar; 

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    z-index: 1;
    background-color: white;
    align-items: center;


    h3{
        font-weight: bolder;
        cursor: pointer;
        font-family: 'Source Sans Pro', sans-serif;
        
    }
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
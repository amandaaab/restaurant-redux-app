import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';


// Component
class Navbar extends Component {
   
    refresh = () => {
        window.location.reload()
    }

   
    render(){
    
        return (
            <div>
                <Container>
                    <NavLink onClick={this.refresh} className="navItem" activeClassName="selected" to="/" exact> RESTAURANGKARTAN</NavLink>
                    <NavLink className="navItem" id="favo" activeClassName="selected" to="/favoriter" exact><FaHeart className="favo"/> FAVORITER</NavLink> 
                </Container>
    
          </div>       
    )
}
}

export default withRouter(Navbar); 

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    height: 68px;
    z-index: 1;
    background-color: white;
    align-items: center;
    max-width: 100%;

    @media all and (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    margin: 5px 0px;    
    height: 78px;
    }

h3{
    font-weight: bolder;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    
}
    .navItem {
        font-family: 'Source Sans Pro', sans-serif;
        color: BLACK;
        font-size: 22px;
        margin: 2%;
        cursor: pointer;
        text-decoration: none;

        @media all and (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
        margin: 1%;
        
        }
    }


 .favo {
        color: rgb(221, 79, 86);
        font-size:16px;

        @media all and (max-width: 700px) {
        font-size: 12px;
        }
    }

    #favo {
        @media all and (max-width: 700px) {
        font-size: 16px;
        }
    }

    .selected {
        text-decoration: underline;
        color: rgb(46, 46, 46);
    }

`
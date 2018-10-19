import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import CategoryNavbar from './CategoryNavbar';
import {Collapse} from 'react-collapse';



// Component
class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            show: false,
            opacity: 0
        }

        this.showCategory = this.showCategory.bind(this);
        this.hideCategory = this.hideCategory.bind(this)
    }

    showCategory = () => {
        this.setState(prevState => ({
            show: !prevState.show,
            opacity: 1

        }))
    }

    hideCategory = () => {
        this.setState({
            show: false,
            opacity: 0
        })
    
    }

    render(){
    
        return (
            <div>
    <Container>
        <NavLink className="navItem"  onClick={() => this.hideCategory()}activeClassName="selected" to="/" exact><FaHome/></NavLink>
        <NavLink  onClick={() => this.showCategory()} className="navItem" activeClassName="selected" to="/restauranger" exact>RESTAURANGER</NavLink>
        <NavLink className="navItem" onClick={() => this.hideCategory()} activeClassName="selected" to="/favoriter" exact>FAVORITER</NavLink> 
    </Container>
     <Collapse isOpened={this.state.show}>  
     <CategoryNavbar categories={this.props.categories} foodCategories={this.props.foodCategories}/>
        </Collapse>    
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
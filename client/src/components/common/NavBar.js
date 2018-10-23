import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import CategoryNavbar from './CategoryNavbar';
import {Collapse} from 'react-collapse';
import { readlink } from 'fs';



// Component
class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            show: false,
            opacity: 0,
            allSelected: []
        }
console.log('TYPEOF', typeof this.state.allSelected);
        this.showCategory = this.showCategory.bind(this);
        this.hideCategory = this.hideCategory.bind(this)
        this.onFilter = this.onFilter.bind(this)
    }

    onFilter = (selectedOpt) => {

        if(this.state.allSelected.length <= 0){
            this.pushNew(selectedOpt)
        }
            
            
        this.state.allSelected.map(obj =>{
            
            if(obj.category === selectedOpt.category){
            let array = [...this.state.allSelected]
            let index = array.indexOf(obj);
             let newArray = array.splice(index, 1, selectedOpt)
            console.log('ska va borta', array)

            this.setState({
               allSelected: newArray
               }, console.log('ALLA EFTER SPLICE', this.state.allSelected))
            } else {
                this.pushNew(selectedOpt)
            }
            })
            
   
    }

    pushNew = (selectedOpt) => {
        this.setState(prevState => {
            return {allSelected: [...prevState.allSelected, selectedOpt]}
          }, () => console.log('i navbar array', this.state.allSelected))

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
     <button>sök</button> 
     {this.props.categories.map(category =>
     <CategoryNavbar 
                    category={category.name}
                    cityCategories={this.props.cityCategories} 
                    foodCategories={this.props.foodCategories}
                    onFilter={this.onFilter}
                    />
     )}
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
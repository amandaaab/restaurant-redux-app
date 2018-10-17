import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const CategoryNavbar = () => {
    return (
  
    <CategoryList>
        <ChooseCategory>Välj kategori</ChooseCategory>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/italienskt" exact>Italienskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/libanesiskt" exact>Libanesiskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/spanskt" exact>Spanskt</NavLink>
   </CategoryList>
    )
}

export default CategoryNavbar; 




const CategoryList= styled.div`
     display: flex;
    justify-content: center;
    flex-direction: column;
    margin:20px;
`
const ChooseCategory = styled.p`
    margin: auto;  
    margin-top:20px;
    font-weight: bold;
    color: black;
`
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const CategoryNavbar = () => {
    return (
  
    <CategoryList>
        <ChooseCategory>Kök och maträtter</ChooseCategory>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/italienskt" exact>Italienskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/libanesiskt" exact>Libanesiskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/spanskt" exact>Spanskt</NavLink>
   </CategoryList>
    )
}

export default CategoryNavbar; 


const CategoryList= styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 5vh;

    background-color: white;
    width: 180px;
    padding-top: 40px;
    min-height: 280px;
    left: 0;

    .categoryNavItem {
    color: rgb(15, 15, 15);
    text-decoration: none;
    margin: 5%;
    font-family: 'Source Sans Pro', sans-serif;
}

.selectedCategory {
    color: rgb(231, 227, 227);
    text-decoration: underline;
}
`
const ChooseCategory = styled.p`

    margin: 5%;
    font-weight: bolder;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
`
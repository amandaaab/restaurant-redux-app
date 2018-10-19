import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select'

const CategoryNavbar = (props) => {

const options = [];

props.foodCategories.map((fCategory) => 
options.push(
    { value: fCategory.name, label: fCategory.name } //ska value vara name eller id???
)
)

    return (

    <CategoryList>
        

         {props.categories.map((category, i) =>
            <div>
                 <span>{category.name}</span>
                <Select 
                className="select"
                placeholder={`Välj ${category.name}`}
                options={options}
                /> 
            </div>
            )
            }
    
        {/*<ChooseCategory>Kök och maträtter</ChooseCategory>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/italienskt" exact>Italienskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/libanesiskt" exact>Libanesiskt</NavLink>
        <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/spanskt" exact>Spanskt</NavLink>*/}
   </CategoryList>      
   
    )
}

export default CategoryNavbar; 



const CategoryList= styled.div`
    height: 90px;
    background-color: gray;
    display: flex;
    justify-content: center;
    background-color: rgb(255, 240, 212);
    width: 100%;  
    align-items: center;
    /*width: 100%;*/

    .select {
      width: 240px;
      margin: 1%;
    }


    .categoryNavItem {
    color: rgb(15, 15, 15);
    text-decoration: none;
    margin: 1%;
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
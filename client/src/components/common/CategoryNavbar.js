import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select'

const CategoryNavbar = (props) => {

const options = [];

props.foodCategories.map((foodCategory) => {
    if(foodCategory.main_category === props.category.name ){
        options.push(
             {value: foodCategory.name, label: foodCategory.name} //ska value vara name eller id???
        )
    } 
})

props.cityCategories.map((cityCategory) => {
    if(cityCategory.main_category === props.category.name ){
        options.push(
             {value: cityCategory.name, label: cityCategory.name} //ska value vara name eller id???
        )
    } 
})



    return (

    <CategoryList>
        
            <div>
                 <span>{props.category.name}</span>
                <Select 
                className="select"
                placeholder={`Välj ${props.category.name}`}
                options={options}
                /> 
            </div>

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
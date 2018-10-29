import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';


class CategoryNavbar extends Component {
constructor(props){
    super(props)

    this.state = {
        selectedOption: null,
      }
      this.handleChange = this.handleChange.bind(this)
     
}


handleChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption.value);
    this.setState({ selectedOption });

    this.props.onFilter(selectedOption);
}


render(){

    const options = [];

    options.push({label: 'alla', value: 'all', category: this.props.category})

    this.props.foodCategories.map((foodCategory) => {
        if(foodCategory.main_category === this.props.category ){
            options.push(
                 {value: foodCategory.name, foodId: foodCategory.id, label: foodCategory.name, category: this.props.category} //ska value vara name eller id???
            )
        } 
        return options;
    })
    
    this.props.cityCategories.map((cityCategory) => {
        if(cityCategory.main_category === this.props.category ){
            options.push(
                 {value: cityCategory.name, cityId: cityCategory.id, label: cityCategory.name, category: this.props.category} //ska value vara name eller id???
            )
        } 
        return options;
    })


    return (
     
    <CategoryList>
        
                 <span>{this.props.category.charAt(0).toUpperCase()+ this.props.category.slice(1)}</span>
                <Select 
                    className="select"
                    placeholder={`Välj ${this.props.category}`}
                    options={options}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                /> 
         

   </CategoryList>     
  
    )
}

}


export default CategoryNavbar; 

const CategoryList= styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start; 
    background-color: white;
    width: 20%;
    /*width: 100%;*/

span {
    color: black;
    font-size:12px;
    font-weight: normal;
    margin-left: 5px;
}
    

    .select {
      max-width: 100%;
      
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
/*
const ChooseCategory = styled.p`

    margin: 5%;
    font-weight: bolder;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
`
*/
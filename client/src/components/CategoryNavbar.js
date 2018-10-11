import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavbar = () => {
    return (
    <div className="categoryDiv">
  
    <div className="categoryList">
    <div className="choose-category">Välj kategori</div>
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/italienskt" exact>Italienskt</NavLink>
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/libanesiskt" exact>Libanesiskt</NavLink>
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/spanskt" exact>Spanskt</NavLink>
   </div>
</div>
    )
}

export default CategoryNavbar; 
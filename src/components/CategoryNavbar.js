import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const CategoryNavbar = () => {
    return (
    <div className="categoryDiv">
    <div className="choose-category">Välj kategori</div>
    <div className="categoryList">
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/italienskt" exact>Italienskt</NavLink>
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/libanesiskt" exact>Libanesiskt</NavLink>
    <NavLink className="categoryNavItem" activeClassName="selectedCategory" to="/restauranger/spanskt" exact>Spanskt</NavLink>
   </div>
</div>
    )
}

export default CategoryNavbar; 
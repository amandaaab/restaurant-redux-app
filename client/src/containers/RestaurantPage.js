import React, {Component} from "react";
import ReactLoading from 'react-loading';
import RestaurantList from '../components/restaurant/RestaurantList';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CategoryNavbar from '../components/common/CategoryNavbar';
import {Collapse} from 'react-collapse';
import image from '../images/chark.jpg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { withRouter } from 'react-router';


class RestaurantPage extends Component {
  constructor(props){
    super(props)

    console.log('HISTORY I RESTAURANTP CONSTR', this.props.history.location.state)
   
    this.state = {
      show: false,
      allSelected: this.props.history.location.state ? this.props.location.state : []
    }

    this.showCategory = this.showCategory.bind(this);
    this.onFilter = this.onFilter.bind(this)
    this.pushNew = this.pushNew.bind(this)
  } 

  onFilter = (selectedOpt) => {
   // console.log('vald kategori', selectedOpt.category)
    let newArray = this.state.allSelected.filter(obj => (obj.category !== selectedOpt.category));
    this.setState({
        allSelected: newArray
    }, () => this.pushNew(selectedOpt))

}

pushNew = (selectedOpt) => {
    this.setState({
        allSelected: [...this.state.allSelected, selectedOpt]
      }, () => console.log('i navbar array', this.state.allSelected))
}

  showCategory = () => {
    this.setState(prevState => ({
        show: !prevState.show,
      }))
  }

  closeSelect = () => {
    this.setState({
      show: false,
    })
  }
  


  render() {

    if(this.props.history.location.state){
      console.log('nu är den längre än två')
    }
    // Render error, loading, or resturantpage
    const { error, loading } = this.props;
    
    if (error) { return <div>Error! {error.message}</div>}

    else if (loading) {
       return (
          <LoadingSpinner>
              <ReactLoading type={'spin'} color={'orange'} height={60} width={30} />
          </LoadingSpinner>
       )
      }
    
      else {    
     // console.log("All selected här",this.state.allSelected)
      let hihi = this.state.allSelected.map((sel) => { return sel.cityId }).join("");
      //console.log('HÄR ÄR DEN', hihi);
      let hihi2 = this.state.allSelected.map((sel) => { return sel.foodId }).join("");

   //console.log(hihi2);
   
     return (
          <Container>

            <div className="filterDiv">
                <a className="filter" onClick={this.showCategory}><span>Filtrera restauranger</span>
                <span> { this.state.show ?  <FaAngleUp/> :  <FaAngleDown />}</span></a>
            </div>

            <Content>
               <Collapse isOpened={this.state.show}>
               <div className="categoryWrap">

                {this.props.categories.map((category, i) =>
                  <CategoryNavbar 
                        category={category.name}
                        cityCategories={this.props.cityCategories} 
                        foodCategories={this.props.foodCategories}
                        onFilter={this.onFilter}
                        key={i}
                        />
                        )}
              </div>
            </Collapse>
            </Content>
              <Content>
              <h4 className="filter">Alla restauranger</h4>


                  <List>
                       {this.state.allSelected ?                  
                          <RestaurantList   
                                            cityCat={hihi}
                                            foodCat={hihi2}
                                            restaurants={this.props.restaurants}
                                            restaurantP={this.props.restaurantP}
                                            reviews={this.props.reviews}
                                            showCategory={this.closeSelect}
                                            saveState={this.state.allSelected}
                                            />

                         : 
                        <RestaurantList cat={this.props.cat}
                        restaurantP={this.props.restaurantP}
                        restaurants={this.state.filteredArray}
                        reviews={this.props.reviews}
                        showCategory={this.closeSelect}
                        saveState={this.state.allSelected}

                        />
                       }

                    </List>
                </Content>
           </Container>
    ); 
  }
}
}

const mapStateToProps = (state) => {
  return {
      restaurants: state.restaurants.restaurants,
      loading: state.restaurants.loading,
      error: state.restaurants.error,
      reviews: state.reviews.reviews,
      categories: state.categories.categories,
      foodCategories: state.categories.foodCategories,
      cityCategories: state.categories.cityCategories

  }
}

// Style
const Container = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    background-color:white;
    height: auto;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(49, 44, 44);

    .filterDiv{
      display: flex;
      justify-content: center;
      align-items:center;
      height: 70px;
      width:100%;
      font-family: 'Source Sans Pro', sans-serif;
    }

.filter{
  margin: 0px 30px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bolder;
}

a.filter{
  border: none;
  cursor: pointer;
  color: black;
 
  font-size: 16px;
}

a.filter:active{
  text-decoration: underline;
}

`
const Content = styled.div `  
  width: 100%;
 

  .categoryWrap {
    display: flex;
    justify-content: center;
  
  
  }
`
const List = styled.div `
   width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const LoadingSpinner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 100vh;
`

export default withRouter(connect(mapStateToProps)(RestaurantPage));

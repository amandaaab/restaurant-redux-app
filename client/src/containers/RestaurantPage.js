import React, {Component} from "react";
import ReactLoading from 'react-loading';
import RestaurantList from '../components/restaurant/RestaurantList';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CategoryNavbar from '../components/common/CategoryNavbar';
import {Collapse} from 'react-collapse';





class RestaurantPage extends Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    this.state = {
      show: false,
      filteredArray: null,
      allSelected: []
    }

    this.onSearch = this.onSearch.bind(this)
    this.showCategory = this.showCategory.bind(this);
    this.onFilter = this.onFilter.bind(this)
    this.pushNew = this.pushNew.bind(this)
  } 


  onFilter = (selectedOpt) => {
    console.log('vald kategori', selectedOpt.category)

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



  onSearch = (search) => {
    this.setState({
      filteredArray: this.props.restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })
    })
  }

  render() {
    // Render error, loading, or resturantpage
    const { error, loading } = this.props;
    
    if (error) {
            return <div>Error! {error.message}</div>;
        }

    else if (loading) {
      
       return (
        <LoadingSpinner>
           <ReactLoading type={'spin'} color={'orange'} height={60} width={30} />
        </LoadingSpinner>
       )
      }
    
   else {    

     return (
          <Container>
            <button onClick={this.showCategory}>Filtrera</button>
               <Collapse isOpened={this.state.show}>

            {this.props.categories.map((category, i) =>
              <CategoryNavbar 
                    category={category.name}
                    cityCategories={this.props.cityCategories} 
                    foodCategories={this.props.foodCategories}
                    onFilter={this.onFilter}
                    key={i}
                    />
                     )}
            </Collapse>
              <Content>


                  <List>
                   {/* <Search onSearch={this.onSearch} restaurants={this.props.restaurants}/> */}
                        {this.state.filteredArray ? 
                          <RestaurantList cat={this.props.cat}
                                            restaurantP={this.props.restaurantP}
                                            restaurants={this.state.filteredArray}
                                            reviews={this.props.reviews}
                                            />

                                            :

                          <RestaurantList cat={this.props.cat}
                                            restaurantP={this.props.restaurantP}
                                            restaurants={this.props.restaurants}
                                            reviews={this.props.reviews}
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
    min-width: 100%;
    background-color: rgb(242, 233, 225);
    height: auto;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(49, 44, 44);

    

`
const Content = styled.div `  

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

export default connect(mapStateToProps)(RestaurantPage);

import React, {Component} from "react";
import ReactLoading from 'react-loading';
import RestaurantList from '../components/restaurant/RestaurantList';
import CategoryNavbar from '../components/common/CategoryNavbar';
import { connect } from 'react-redux';
import Search from '../components/common/Search';
import styled from 'styled-components';


class RestaurantPage extends Component {
  constructor(props){
    super(props)
    console.log('params:', this.props.cat);
    this.state = {
      filteredArray: null
    }

    this.onSearch = this.onSearch.bind(this)
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
              <Content>
                  <div className="categoryWrap">
                      <CategoryNavbar/>
                  </div>

                  <List>
                    <Search onSearch={this.onSearch} restaurants={this.props.restaurants}/>
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
      reviews: state.reviews.reviews
  }
}

// Style
const Container = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-width: 100%;
    background-color: rgb(255, 255, 255);
    height: auto;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(49, 44, 44);

`
const Content = styled.div `

.categoryWrap {
  margin-top: 2%;
}
    display: flex;
    justify-content: center;
    width: 90%;
    margin-top: 130px;

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

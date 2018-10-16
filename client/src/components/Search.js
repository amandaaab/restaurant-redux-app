import React, {Component} from 'react';


class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: '',
           array: []
           
        }

        this.onChange = this.onChange.bind(this)
        //this.renderSearchedRestaurant = this.renderSearchedRestaurant.bind(this)
        
    }

    onChange = (e) => {
        
        e.preventDefault();
        console.log("search input", e.target.value, "restauranger i search", this.props.restaurants)
        this.setState({
            search: e.target.value,
        }, () => this.props.onSearch(this.state.search))
    }

/*
    renderSearchedRestaurant = () => {
        const {search} = this.state
        const {array} = this.state
      //  const array = []
        this.props.restaurants.map(restaurant =>{
            if(search !== '' && )
        })
    }
*/
    render(){

        return (
            <div>
                <input type="text" onChange={this.onChange}></input>
                <br></br>
                <span>{this.state.search}</span>
                
            </div>
        )
    }
}

export default Search;
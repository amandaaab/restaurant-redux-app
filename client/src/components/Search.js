import React, { Component } from 'react';


class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }

        this.onChange = this.onChange.bind(this)
        
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value,
        }, () => this.props.onSearch(this.state.search))
    }

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
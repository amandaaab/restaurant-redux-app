import React, { Component } from 'react';
import styled from 'styled-components';


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
            <Container>
                   <input type="text" onChange={this.onChange}/>
            </Container>
        )
    }
}

export default Search;

const Container = styled.div`

input {
    height: 30px;
    width: 150%;
    border: 1px solid lightgrey;
    border-radius: 2%;
}

`
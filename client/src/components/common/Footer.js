import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';


// Component
 const Footer = () => {
      
        return (
            <Container>
            <div class="kontaktUppgifter">
                <p>Restaurangguiden</p>
                <p>Restaurangguiden@restauranger.se</p>
                <p>031 21 32 43</p>
            </div>
            <div class="minalänkar">
            <div class="sträck"></div>
            <div class="länkar">
                  <p>Policy</p>
                
            </div>
            <div class="sträck"></div>
            <div class="länkar">
                  <p>@Copyright restaurangguiden 2018</p>
                </div>
            </div>
        </Container>     
    )
}


export default Footer; 

const Container = styled.div `

    height: 200px;
    background-color: rgb(204,79,79);
    color: white;
    text-transform: uppercase;
    max-width: 100%;
    font-weight: normal;
    font-size: 14px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:60px;
    font-family: 'Source Sans Pro', sans-serif;
  

.sträck {
    height: 100px;
    width: 1px;
    background-color: #A19D9D;
    opacity: 0.2;
    border-radius: 50%;
}

#länk1 , #länk2 {
    color: #FFF;
    font-size: 42px;
    padding: 10px;
}

.länk {
   color: white;
}

.minalänkar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 500px;
}

@media all and (max-width: 800px) {
  
    padding-left: 0px;
    padding-right: 0px;
    
  
    #länk1, #länk2, {
        font-size: 36px;
        margin: 5px;
    }
    
    .länkar {
        flex-direction: column;
    }
    
    .sträck {
        height: 0px;
        width: 0px;
    }
   
    .minalänkar {
        display: flex;
        flex-direction: column;
        width: 80px;
    }
    #footer {
    justify-content: space-between;
    height: 200px;
    margin-top: 0px;
    }
}
    
`



import React, { Component } from 'react';
//import ReactLoading from 'react-loading';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {
    constructor(
        
    ) {
      super();
   
      this.state = {
        rating:undefined,
        ratingSum: [],
        totalSum: null
      }

      this.calculate = this.calculate.bind(this)
    }
    
    onStarClick(nextValue) {
      this.setState({
        rating: nextValue       
        }, function() {
          this.together() 
        }
    );  

}
   
    together = () => {
        if(this.state.rating){
            this.setState({
                ratingSum: this.state.ratingSum.concat(this.state.rating)
            }, function(){
                this.calculate()
            })
        } 
    }

    calculate = (counted) => {

        var numberOfRates =  this.state.ratingSum.length;
        var total= null;
        i= 0;   

        for(var i in this.state.ratingSum) { 
            total += this.state.ratingSum[i];

            this.setState({
                totalSum:  total / numberOfRates 
            }, function () {
                this.trimSum()
            })         
         }
        console.log("totalen", this.state.totalSum)

       // return this.state.totalSum;    
    //  console.log(this.state.ratingSum.indexOf(this.state.ratingSum))
    // console.log("i calculate function", this.state.ratingSum.length)
    }

    trimSum = () => {
        var n = this.state.totalSum

        this.setState({
            totalSum: n.toFixed(1)
        })
        return this.state.totalSum
    }
     
    
   
    render() {
      const { rating } = this.state;
      
      return (                
        <div>
          <h2>Rating from state: {this.state.totalSum}</h2>
          <div style={{fontSize: 30}}>
          <StarRatingComponent
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />

          </div>
        </div>

      );
    }
  }

  export default StarRating;

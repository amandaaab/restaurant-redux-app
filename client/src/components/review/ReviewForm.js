import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from '../Ratings';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';


class ReviewForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ratingNumber: null,
            ratingNumberError: '',
            name: '',
            nameError: '',
            text: '',
            textError: '',
            open: false
        }


        this.save = this.save.bind(this)   
        this.showSum = this.showSum.bind(this)
        this.validate = this.validate.bind(this)
        this.change = this.change.bind(this)
        
    }

    onOpenModal = () => {
        this.setState({
            open: true
        })
    }

    onCloseModal = () => {
        this.setState ({
            open:false
        })
    }

    validate = () => {

        let isError = false;

        const nameLength = this.state.name.length;
        console.log(nameLength)

        const errors = {
            nameError: '',
            textError:'', 
            ratingNumberError: ''
        }

        if(this.state.name.length <= 0){
            isError = true;
            errors.nameError = <Error>* Vänligen fyll i ett namn</Error>
        }
        if(this.state.name.length >= 15){
            isError = true;
            errors.nameError = 'Du har använt 15 av 15 tecken'
        }

        if(this.state.text.length <= 0){
            isError = true;
            errors.textError = <Error>* Vänligen skriv vad du tycker om restaurangen</Error>
        }
        if(this.state.text.length >= 450){
            isError = true;
            errors.textError = 'Du har använt 450 av 450 tecken'
        }
        if(this.state.ratingNumber <= 0){
            isError = true;
            errors.ratingNumberError = <Error>* Vänligen ge restaurangen ett betyg</Error>
        }
        this.setState({
            ...this.state,
            ...errors
          });
      
          return isError; 
    }
    
    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    save = (e) => {
        e.preventDefault()

        const err = this.validate();
        if(!err) {
            alert("Tack för du tycker till!")
            this.props.saveThis(this.state.name, this.state.text, this.props.id, this.state.ratingNumber)
        }
       
    }

    showSum = (ratingNumber) => {
        this.setState({
            ratingNumber: ratingNumber
        })
    }

    render(){

        return(
        
        <React.Fragment>
            <CreateReviewButton onClick={this.onOpenModal}>Ge ditt omdöme</CreateReviewButton>
        
            <Modal open={this.state.open} onClose={this.onCloseModal}>
            <Form onSubmit={this.save}>
                <h3>Hur var din upplevlse på {this.props.name}?</h3>
                <div className="form-group">
                    <FormBox>
                    
                    <StarRating sendSum={this.showSum}/>
                    {this.state.ratingNumberError}
                    </FormBox>

                    <FormBox>
                    <label id="nameBox">Ditt namn</label>
                    <input name="name"
                            id="form-name"
                            type="text"
                            className="form-control" 
                            placeholder="Namn" 
                            value={this.state.name}
                            maxLength="15"
                            onChange={e => this.change(e)}
                           />
                           {this.state.nameError}
                        </FormBox>

                        <FormBox>
                    <label>Ditt omdöme</label>
                    <textarea name="text"
                                className="form-control"
                                placeholder="Berätta om din upplevelse..."
                                value={this.state.text}
                                id="textarea"
                                maxLength="450"
                                onChange={e => this.change(e)}
                               />
                               {this.state.textError}
                               </FormBox>
                </div>
                <SubmitButton id="sendButton" className="btn btn-primary">Skicka</SubmitButton>

            </Form>
            </Modal>
            
            
        </React.Fragment>
      
        )
    }
}

ReviewForm.propTypes = {
    id: PropTypes.number.isRequired,
    isDisplayed: PropTypes.bool,
    display: PropTypes.func,
    reviews: PropTypes.arrayOf(Object),
    saveThis: PropTypes.func

  };

export default ReviewForm;

const Error = styled.div `
    color: 'red';
    
`

const CreateReviewButton = styled.button`
    border: none;
    background: none;
    text-decoration: underline;
    font-size: 16px;
    font-weight: bolder;
    color: rgb(58, 59, 61);
    width: 300px; 
    font-family: 'Source Sans Pro', sans-serif;x
    &:hover {
        color: rgb(98, 100, 100);
    }
    &:active {
        color: rgb(0, 0, 0);
    }
`

const Form = styled.form `

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height:100%;
width: 100%;
margin: auto;
font-family: 'Source Sans Pro', sans-serif;

  @media all and (max-width: 399px){
            margin-top:70px;
    }

#sendButton {
    border: none;
    background: #2c2d2d;
}
.label-for-rating {
 margin-bottom: -20px;
}
.label-for-name {
    margin-top:-50px;
}

.form-control {
    width: 75vh;

     @media all and (max-width: 500px) {
         width: 100%;
     }

}

h3 {
    @media all and (max-width: 500px) {
         font-size: 18px;
         
     }

       @media all and (max-width: 399px){
            text-align: center;
        }
}
`
const FormBox = styled.div `
    margin: 2vh 0vh;

      #textarea {
        height: 110px;

        @media all and (min-width: 400px) and (max-width: 1024px) and (orientation: landscape ){
            height: 70px;
        }

         @media all and (max-width: 399px){
            height: 70px;
            width: 280px;
        }


}


    }



`
const SubmitButton = styled.button `
   
`

import React, { Component } from 'react'
import {FormUserDetails} from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirn from './Confirn'
import Success from './Successs'

class UserForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         step:1,
         firstName:"",
         lastName:"",
         email:"",
         occupation:"",
         city:"",
         bio:"",
      }
    }

    //proceed to next step
    nextStep = () =>{
        const {step}=this.state;
        this.setState({
            step:step+1
        })
    }

    //go back to previous step
    prevStep=()=>{
        const {step}=this.state
        this.setState({
            step:step-1 
        })
    }

    //handle fields change
    handleChange = input => e =>{
        this.setState({ [input]:e.target.value})
    }

  render() {
    const {step}=this.state;
    const {firstName,lastName,email,occupation,city,bio}=this.state
    const values={firstName,lastName,email,occupation,city,bio};
    switch(step){
      case 1: 
      return (
        <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
      )
      case 2:
        return (
          <FormPersonalDetails 
          nextStep={this.nextStep} 
          prevStep={this.prevStep} 
          handleChange={this.handleChange} 
          values={values}
          />
        )
      case 3: 
      return (
        <Confirn 
        nextStep={this.nextStep} 
        prevStep={this.prevStep} 
        values={this.values}
        />
      )
      case 4:
        return (
          <Success/>
        )
    }
  }
}

export default UserForm
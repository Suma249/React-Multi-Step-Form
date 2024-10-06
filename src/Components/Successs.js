import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export class Success extends Component {
   
  render() {
    //const {values, handleChange}=this.props;
   // const {firstName,lastName,email,occupation,city,bio}=this.props
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title='Confirm User Data'/>     
            <h1>Thank you for your submission</h1>
            <p>you will get an email with further instructions</p>
            </React.Fragment>
       </MuiThemeProvider>
    )
  }
}


export default Success;
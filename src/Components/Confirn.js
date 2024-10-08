import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirn extends Component {
    continue = e => {
        e.preventDefault();
        //process form

        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        //const {values, handleChange}=this.props;
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props
        console.log("props: " + this.props.values)
        // console.log("values: " + values);
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm User Data' />
                    <List>
                        {/* <ListItem
                primaryText='first name'
                secondaryText={firstName}
                /> */}
                        <ListItem
                            primaryText='last name'
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText='email'
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText='occupation'
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText='city'
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText='bio'
                            secondaryText={bio}
                        />
                    </List>
                    <RaisedButton
                        label='Confirm and Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Confirn;
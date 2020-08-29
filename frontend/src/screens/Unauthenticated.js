import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default class Unauthenticated extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    changeEmail = (email) => {
        this.setState({email: email});
    }

    changePassword = (password) => {
        this.setState({password: password});
    }

    enableLogin = () => {
        return this.state.email.length > 0 && this.state.password.length > 0
    }

    authenticate() {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View>
                <Text style='red'> Log in </Text>
                <Text> Email </Text><TextInput placeholder="example@gmail.com" onChangeText={(text) => this.changeEmail(text)}></TextInput> 
                <Text> Password </Text><TextInput secureTextEntry={true} onChangeText={(text) => this.changePassword(text)}></TextInput>
                <Button title="Log in" disabled={!this.enableLogin()} onPress={() => this.authenticate()}></Button>
            </View>
        )
    }
}
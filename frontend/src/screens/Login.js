import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

export default class Unauthenticated extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
        return expression.test(String(email).toLowerCase())
    }

    changeEmail = (email) => {
        this.setState({email: email});
    }

    changePassword = (password) => {
        this.setState({password: password});
    }

    enableLogin = () => {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.validate(this.state.email)
    }

    authenticate() {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View>
                <Text style={{marginLeft: 20, color: 'black', fontSize: 40, fontWeight: 'bold', color:'#284142'}}> Log In </Text>
                <Text style={{marginLeft: 20, marginTop: 80, color: 'black', fontSize: 25, textAlign:'left', letterSpacing:1}}>Email</Text>
                <TextInput placeholder="example@gmail.com" onChangeText={(text) => this.changeEmail(text)}></TextInput> 
                <Text style={{marginLeft: 20, marginTop: 20, color: 'black', fontSize: 25, textAlign:'left', letterSpacing:1}}>Password</Text>
                <TextInput secureTextEntry={true} onChangeText={(text) => this.changePassword(text)}></TextInput>
                <TouchableOpacity onPress={() => this.authenticate()} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 20, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
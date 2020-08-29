import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white', flex:1}}>
                <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> WELCOME </Text>
                <Text style={{marginLeft: 20, color: 'black', fontSize: 70, fontWeight: 'bold', color:'#284142'}}> User </Text>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("GroceryInput")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 40, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>to grocerry input</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TravelInput")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 20, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>to travel input</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


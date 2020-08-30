import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Profile extends Component {
    render() {
        const styles = StyleSheet.create({
            tabNavigationStyle: {
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                bottom: 15,
            },
          });
        return (
            <View style={{backgroundColor:'white', flex:1, height: '100%'}}>
                <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> WELCOME </Text>
                <Text style={{marginLeft: 20, fontSize: 70, fontWeight: 'bold', color:'#284142'}}> Jane </Text>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 40, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("FriendsList")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 20, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>Friends List</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Home extends Component {  
    render() {
        const styles = StyleSheet.create({
            tabNavigationStyle: {
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%', 
                height: 50, 
                bottom: 15,

            },
          });
        return (
            <View style={{backgroundColor:'white', flex:1, height: '100%'}}>
                <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> WELCOME </Text>
                <Text style={{marginLeft: 20, fontSize: 70, fontWeight: 'bold', color:'#284142'}}> Jane </Text>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("GroceryInput")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 40, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>to grocerry input</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TravelInput")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 20, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>to travel input</Text>
                </TouchableOpacity>

                <View style={styles.tabNavigationStyle}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                        <Icon reverse name="home"> </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('GroceryHistory');}}>
                        <Icon reverse name="shopping-cart"> </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('TravelHistory');}}>
                        <Icon reverse name="drive-eta"> </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile');}}>
                    <   Icon reverse name="person"> </Icon>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
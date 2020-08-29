import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'

import TravelHistoryCard from '../components/TravelHistoryCard'

export default class TravelHistory extends Component {
    renderItem = (item) =>{
        //chnage the props to the info passed into the data object
        return <TravelHistoryCard date='12th August 2020' carBrand='Ford' distance='10km' fuelType='Unleaded 97' emission='2.5 tons'/>
    }
    render() {
        const data= [{title: 'data', id:1}, {title: 'data', id:2}]
        const styles = StyleSheet.create({
            tabNavigationStyle: {
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%', 
                bottom: 0,

            },
            tabIconStyle:{
                
            }
          });
        return (
            <View>
                <View>
                    <Text> Carbon FootPrint </Text>
                    <Text> Travel </Text>
                    <Text> Your Carbon Footprint: 2.5 tons </Text>
                    <FlatList 
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />   
                </View>
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
                        <Icon reverse name="person"> </Icon>
                    </TouchableOpacity>
            </View>
        </View>
        )
    }
}

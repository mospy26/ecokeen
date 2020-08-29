import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import ScoreCard from '../components/ScoreCard'

export default class MainHistory extends Component {
    render() {
        const styles = StyleSheet.create({
            tabNavigationStyle: {
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%', 
                height: 50, 
                bottom: 15,

            },
            tabIconStyle:{
                
            }
          });
        return (
            <View>
                <Text> Carbon Footprint </Text>
                <Text> Last 10 Days </Text>
                <View> 

                </View>
                <ScoreCard name='Your best footprint score' date = '24/08' score='0.5'/>
                <ScoreCard name='Your worst footprint score' date = '24/08' score='0.5'/>
                <Text> Your average carbon footprint</Text>
                <Text> 2.5 tons </Text>
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

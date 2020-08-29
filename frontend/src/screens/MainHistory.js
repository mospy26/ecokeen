import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MainHistory extends Component {
    render() {
        return (
            <View>
                <Text> Carbon Footprint </Text>
                <Text> Last 10 Days </Text>
                <View> 
                    
                </View>
                <ScoreCards name='Your best footprint score' date = '24/08' score='0.5'/>
                <ScoreCards name='Your worst footprint score' date = '24/08' score='0.5'/>
                <Text> Your average carbon footprint</Text>
                <Text> 2.5 tons </Text>
            </View>
        )
    }
}

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ScoreCard extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.name} </Text>
                <Text> {this.props.date} </Text>
                <Text> {this.props.score} </Text>
            </View>
        )
    }
}

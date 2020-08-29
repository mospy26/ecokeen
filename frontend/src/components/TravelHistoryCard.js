import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HistoryCard extends Component {
    render() {
        const styles = StyleSheet.create({
            cardStyle: {
                borderColor: 'black',
                borderWidth: 1,
            },
          });
        return (
            <View style={styles.cardStyle}>
                <Text> {this.props.date} </Text>
                <Text> {this.props.carBrand} </Text>
                <Text> {this.props.distance} </Text>
                <Text> {this.props.fuelType} </Text>
                <Text> {this.props.emission} </Text>
            </View>
        )
    }
}

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class GroceryHistoryCard extends Component {
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
                <Text> {this.props.grocery} </Text>
                <Text> {this.props.quantity} </Text>
                <Text> {this.props.emission} </Text>
            </View>
        )
    }
}

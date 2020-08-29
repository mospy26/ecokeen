import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import GroceryHistoryCard from '../components/GroceryHistoryCard'

export default class TravelHistory extends Component {
    renderItem = (item) =>{
        //chnage the props to the info passed into the data object
        return <GroceryHistoryCard date='12th August 2020' grocery='Doritos' quantity='3' emission='0.2 tons'/>
    }
    render() {
        const data= [{title: 'data', id:1}, {title: 'data', id:2}]
        return (
            <View>
                <Text> Carbon FootPrint </Text>
                <Text> Groceries </Text>
                <Text> Your Carbon Footprint: 2.5 tons </Text>
                <FlatList 
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

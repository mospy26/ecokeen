import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import TravelHistoryCard from '../components/TravelHistoryCard'

export default class TravelHistory extends Component {
    renderItem = (item) =>{
        //chnage the props to the info passed into the data object
        return <TravelHistoryCard date='12th August 2020' carBrand='Ford' distance='10km' fuelType='Unleaded 97' emission='2.5 tons'/>
    }
    render() {
        const data= [{title: 'data', id:1}, {title: 'data', id:2}]
        return (
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
        )
    }
}

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'

import TravelHistoryCard from '../components/TravelHistoryCard'

export default class TravelHistory extends Component {
    renderItem = (item) =>{
        //chnage the props to the info passed into the data object
        return <TravelHistoryCard date='12th August 2020' carBrand='Ford' distance='10km' fuelType='Unleaded 97' score='2.5'/>
    }
    render() {
        const data= [{title: 'data', id:1}, {title: 'data', id:2}]
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
            <View style={{backgroundColor:'white', flex:1, height: '100%'}}>
                   <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> CARBON FOOTPRINT </Text>
                <Text style={{marginLeft: 20, color: 'black', fontSize: 50, fontWeight: 'bold', color:'#284142'}}> History </Text>
                <View style={{marginLeft: 20, marginRight: 20, marginTop: 40, flexDirection: 'row', backgroundColor:'#284142', paddingVertical:20, paddingHorizontal: 20, borderWidth:1, borderRadius: 5, alignItems:'center', justifyContent: 'space-between' }}>
                    <Text style={{color: 'white', fontSize: 20, lineHeight:30}}>
                        Your Carbon {"\n"} Footprint
                    </Text>
                    <Text style={{color: 'white', fontSize: 80, fontWeight:'bold', marginLeft:30}}>
                        2.5
                    </Text>
                    <Text style={{color: 'white', fontSize: 20, lineHeight:30}}>
                        TONS
                    </Text>
                </View>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
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

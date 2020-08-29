import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class History extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white', flex:1}}>
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

                <Text style={{marginLeft: 20, marginTop: 40,color: 'grey',}}>
                    12 AUGUST 2020
                </Text>

                <View style={{marginLeft: 20, marginRight: 20, marginTop: 40, flexDirection: 'row', backgroundColor:'white', paddingVertical:20, paddingHorizontal: 20, borderWidth:1, borderRadius: 5, alignItems:'center', justifyContent: 'space-between' }}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{color: 'black', fontSize: 15, marginBottom:10}}>
                            DORITOS (PEPSICO)
                        </Text>
                        <Text style={{color: 'black', fontSize: 15}}>
                            2
                        </Text>
                    </View>
                    <Text style={{color: 'black', fontSize: 60, fontWeight:'bold', marginLeft:30}}>
                        2.5
                    </Text>
                    <Text style={{color: 'black', fontSize: 15, lineHeight:30}}>
                        TONS
                    </Text>
                </View>

            </View>
        )
    }
}
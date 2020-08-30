import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TravelHistoryCard extends Component {
    render() {
        const styles = StyleSheet.create({
            cardStyle: {
                borderColor: 'black',
                borderWidth: 1,
            },
          });
        return (
           <View style={styles.cardStyle}>
                <Text style={{marginLeft: 20, marginTop: 40,color: 'grey',}}>
                    {this.props.date}
                </Text>

                <View style={{marginLeft: 20, marginRight: 20, marginTop: 40, flexDirection: 'row', backgroundColor:'white', paddingVertical:20, paddingHorizontal: 20, borderWidth:1, borderRadius: 5, alignItems:'center', justifyContent: 'space-between' }}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{color: 'black', fontSize: 15, marginBottom:10}}>
                            {this.props.fuelType}
                        </Text>
                        <Text style={{color: 'black', fontSize: 15}}>
                            {this.props.carBrand}
                        </Text>
                        <Text style={{color: 'black', fontSize: 15}}>
                            {this.props.distance}
                        </Text>
                    </View>
                    <Text style={{color: 'black', fontSize: 60, fontWeight:'bold', marginLeft:30}}>
                        {this.props.score}
                    </Text>
                    <Text style={{color: 'black', fontSize: 15, lineHeight:30}}>
                        TONS
                    </Text>
                </View>
            </View>
        )
    }
}

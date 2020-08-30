import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements'
import {LineChart} from 'react-native-chart-kit'

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
               <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> CARBON FOOTPRINT </Text>
                <Text> Last 10 Days </Text>
                <View> 
                    <LineChart  
                        data={{
                            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            datasets: [
                                {
                                  data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                  ]
                                }
                              ] 
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                              borderRadius: 16
                            },
                            propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#FCFCFC"
                            }
                          }}
                          bezier
                          style={{
                            marginVertical: 8,
                            borderRadius: 16
                          }}
                    />
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

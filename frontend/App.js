import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';

import Home from './src/screens/Home'


const navigator = createStackNavigator({
  Home: Home,
}, {
initialRouteName: "Home",
defaultNavigationOptions:{
  title: "Ecokeen"
}
})

export default createAppContainer(navigator)

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';

import Home from './src/screens/Home';
import TravelInput from './src/screens/TravelInput';
import GroceryInput from './src/screens/GroceryInput';


const navigator = createStackNavigator({
  Home: Home,
  TravelInput: TravelInput,
  GroceryInput: GroceryInput,

}, {
initialRouteName: "Home",
defaultNavigationOptions:{
  title: "Ecokeen"
}
})

export default createAppContainer(navigator)

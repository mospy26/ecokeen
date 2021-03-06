import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import TravelInput from './src/screens/TravelInput';
import GroceryInput from './src/screens/GroceryInput';
import MainHistory from './src/screens/MainHistory';
import GroceryHistory from './src/screens/GroceryHistory';
import TravelHistory from '././src/screens/TravelHistory';
import Profile from './src/screens/Profile'
import Unauthenticated from './src/screens/Login'
import FriendsList from './src/screens/FriendsList'
import Settings from './src/screens/Settings'

const navigator = createStackNavigator({
  Home: Home,
  TravelInput: TravelInput,
  GroceryInput: GroceryInput,
  MainHistory: MainHistory,
  GroceryHistory: GroceryHistory,
  TravelHistory: TravelHistory,
  Profile: Profile,
  Unauthenticated: Unauthenticated,
  Settings: Settings,
  FriendsList: FriendsList,
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "Ecokeen"
    }
})

export default createAppContainer(navigator)
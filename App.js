import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from './src/Screens/Details';
import HomeScreen from './src/Screens/HomeScreen';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Details
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'ENVOI'
    }
  }
);

export default createAppContainer(AppNavigator);

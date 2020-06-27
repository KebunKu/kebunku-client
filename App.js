import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/views/LandingPage'
import HomePage from './src/views/HomePage'
import ProfilePage from './src/views/ProfilePage'
import FruitDetail from './src/views/FruitDetail'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FruitDetail">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="FruitDetail" component={FruitDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
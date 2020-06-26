import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/views/LandingPage'
// import LandingPage from './src/views/LandingPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
}

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LandingPage,
  HomePage,
  ProfilePage,
  FruitDetail,
  MyPlantDetail,
  FruitsPage,
} from './src/views';
import { Provider } from 'react-redux';
import store from './src/store/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FruitsPage">
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen name="Profile Page" component={ProfilePage} />
          <Stack.Screen
            name="FruitDetail"
            component={FruitDetail}
            options={{ title: 'Plant Guide', headerTitleAlign: 'center' }}
          />
          <Stack.Screen name="MyPlantDetail" component={MyPlantDetail} />
          <Stack.Screen name="FruitsPage" component={FruitsPage} options={{ title: 'Fruits', headerTitleAlign: 'center' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

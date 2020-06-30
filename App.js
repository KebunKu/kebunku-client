import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  LandingPage,
  HomePage,
  FruitsPage,
  FruitDetail,
  VegetablesPage,
  ProfilePage,
  MyPlantDetail,
} from './src/views';
import { Provider } from 'react-redux';
import store from './src/store/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        // untuk menghilangkan back button ==> headerLeft: null
        options={{ headerTitleAlign: 'center', headerLeft: null }}
      />
      <Stack.Screen
        name="FruitsPage"
        component={FruitsPage}
        options={{ title: 'Fruits', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="FruitDetail"
        component={FruitDetail}
        options={{ title: 'Plant Guide', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="VegetablesPage"
        component={VegetablesPage}
        options={{ title: 'Vegetables', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MyPlant"
        component={MyPlantDetail}
        options={{
          title: 'My Plant',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#00B761',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

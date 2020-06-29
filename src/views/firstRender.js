import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LandingPage,
  HomePage,
  ProfilePage,
  MyPlantDetail,
  FruitsPage,
  FruitDetail,
  VegetablesPage,
} from './src/views';
import { Provider } from 'react-redux';
import store from './src/store/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomePage}
        // untuk menghilangkan back button ==> headerLeft: null
        options={{ headerTitleAlign: 'center' }}
      />
      {/* <Stack.Screen name="Profile Page" component={ProfilePage} /> */}
      <Stack.Screen name="MyPlantDetail" component={MyPlantDetail} />
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

export default function firstRender() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{ headerShown: false }}
        />

        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#4856fe',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarLabel: 'Play',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="gamepad-square"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile Page"
            component={ProfilePage}
            options={{
              tabBarLabel: 'Creator',
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

import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';
import styles from './loginStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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


function LandingPage({ navigation }) {
  const [register, setRegister] = useState(false);
  const [textRegLog, setText] = useState('Didnt Have Account ?');
  const regLogHandle = function() {
    setRegister(!register)
    if (register) setText('Already Have Account ?')
    if (!register) setText('Didnt Have Account ?')
  }

  const isRegister = function() {
    if (register) {
      return (
        <TextInput style={styles.inputBox}
          placeholder="Confirm Password"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          keyboardType="confirm-password"
          onSubmitEditing={()=> this.password.focus()}
        />
      )
    }
  }

  const btnHandle = function() {
    if (!register) {
      navigation.navigate('HomePage')
    }
  }

  return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
        />

        <TextInput style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          keyboardType="password"
          onSubmitEditing={()=> this.password.focus()}
        />

        {isRegister()}

        <TouchableOpacity style={styles.button} onPress={regLogHandle}>
          <Text>{textRegLog}</Text>
        </TouchableOpacity>

        <Button
          title={register ? 'Register' : 'Login'}
          onPress={btnHandle}
        />
      </View>
  );
}

function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
}







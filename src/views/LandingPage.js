import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from '../style/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../store/actions/index';
import axios from 'axios';

const Stack = createStackNavigator();

export default function LandingPage() {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const [register, setRegister] = useState(false);
  const [textRegLog, setText] = useState('Didnt Have Account? Sign up');
  const [ValidationText, setValid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const regLogHandle = function () {
    setRegister(!register);
    if (!register) setText('Already Have Account? Sign in');
    if (register) setText('Didnt Have Account? Sign up');
  };

  const isRegisterName = function () {
    if (register) {
      return (
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          placeholderTextColor="#828282"
          // selectionColor="#FFFFFF"
          onChange={(e) => setName(e.nativeEvent.text)}
        />
      );
    }
  };

  const isRegister2ndPas = function () {
    if (register) {
      return (
        <TextInput
          style={styles.inputBox}
          placeholder="Confirm Password"
          placeholderTextColor="#828282"
          // selectionColor="#FFFFFF"
          secureTextEntry={true}
          onChange={(e) => setConPassword(e.nativeEvent.text)}
        />
      );
    }
  };

  const LoginGoogle = function () {
    if (!register) {
      return (
        <>
          <Text style={styles.textOr}> ──────── OR ────────</Text>
          {/* Button Handel nya nanti di Ganti Tambak API GOOGLE */}
          <TouchableOpacity style={styles.button} onPress={btnHandle}>
            <View style={styles.buttonGoogle}>
              <Text style={{ color: 'white', fontSize: 16 }}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </>
      );
    }
  };

  const btnHandle = function () {
    if (!register) {
      return axios
      .post('http://localhost:3000/login', {
      email: email,
      password: password
    })
    .then((result) => {
      console.log(result.data)
      setName('')
      setEmail('')
      setPassword('')
      setConPassword('')
    }).catch((err) => {
      console.log(err.message)
    });
    } else {
      if ((name, email, password, conPassword)) {
        if (password === conPassword) {
          return axios
            .post('http://localhost:3000/register', {
            name: name,
            email: email,
            password: password
          })
          .then((result) => {
            console.log(result.data)
            setName('')
            setEmail('')
            setPassword('')
            setConPassword('')
          }).catch((err) => {
            console.log(err.message)
          });
        } else {
          setValid('Please Input You data Correctly');
        }
      }
    }
  };

  const isRegisterMsg = function () {
    if (register) {
      return (
        <View>
          <Text style={styles.textBig}>Let's Get Started!</Text>
          <Text style={styles.textMini}>
            Create a new account and start gardening
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.textSmall}>Welcome On</Text>
          <Text style={styles.textBig}>Kebunku</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.RegLogLogoBox}>
        <Image
          style={styles.RegLogLogoImg}
          source={{
            // Logo di Ganti ??
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgUbNj4M940krAk__eEii1OBGaaRAgA7mfcw&usqp=CAU',
          }}
        />
      </View>

      {isRegisterMsg()}

      <Text>{ValidationText}</Text>

      {isRegisterName()}
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="#828282"
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#828282"
        // selectionColor="black"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />

      {isRegister2ndPas()}

      <TouchableOpacity style={styles.buttonBox} onPress={btnHandle}>
        <View>
          <Text style={{ color: 'white', fontSize: 16 }}>
            {register ? 'Register' : 'Login'}
          </Text>
        </View>
      </TouchableOpacity>

      {LoginGoogle()}

      <TouchableOpacity onPress={regLogHandle}>
        <Text>{textRegLog}</Text>
      </TouchableOpacity>
    </View>
  );
}

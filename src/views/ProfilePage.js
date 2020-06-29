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
  ImageBackground,
} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import styles from '../style/profilePageStyle';
// import {} from '../../assets/image/detail/'

export default function App({ navigation }) {
  const toMyPlantDetail = () => {
    navigation.navigate('MyPlant');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/President_Suharto%2C_1983.jpg/170px-President_Suharto%2C_1983.jpg',
            }}
          />
          <View style={styles.headerBoxInfo}>
            <Text style={styles.textName}>Brandon Donovan</Text>
            <Text style={styles.textEmail}>brandon@gmail.com</Text>
            <View style={styles.boxNumPlant}>
              <Text style={styles.textNumPlant}>
                has 5 plants in the garden
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'red' }}> My Plant </Text>
        </View>

        <View style={styles.cardBox}>
          <View style={styles.card}>
            <Image
              style={styles.myPlantImg}
              source={require('../../assets/image/detail/Apel.jpg')}
            />
            <Text style={styles.cardTextName}> Apel </Text>
            <TouchableOpacity onPress={() => toMyPlantDetail()}>
              <Text style={styles.cardSeeDetail}> See Detail </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.myPlantImg}
              source={require('../../assets/image/detail/Wortel.jpg')}
            />
            <Text style={styles.cardTextName}> Wortel </Text>
            <TouchableOpacity onPress={() => toMyPlantDetail()}>
              <Text style={styles.cardSeeDetail}> See Detail </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'red' }}> My Favourite </Text>
        </View>

        <View style={styles.cardBox}>
          <View style={styles.card}>
            <Image
              style={styles.myPlantImg}
              source={require('../../assets/image/detail/Jeruk.jpg')}
            />
            <Text style={styles.cardTextName}> Jeruk </Text>
            <TouchableOpacity>
              <Text style={styles.cardSeeDetail}> See Detail </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.myPlantImg}
              source={require('../../assets/image/detail/Sawi.jpg')}
            />
            <Text style={styles.cardTextName}> Sawi </Text>
            <TouchableOpacity>
              <Text style={styles.cardSeeDetail}> See Detail </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

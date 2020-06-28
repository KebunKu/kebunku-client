import React, { useState } from "react";
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import styles from '../style/profilePageStyle';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/President_Suharto%2C_1983.jpg/170px-President_Suharto%2C_1983.jpg',
            }}
          />
          <View style={styles.headerBoxInfo}>
            <Text style={styles.textName}>Brandon Donovan</Text>
            <Text style={styles.textEmail}>brandon@gmail.com</Text>
            <View style={styles.boxNumPlant}>
              <Text style={styles.textNumPlant}>has 5 plants in the garden</Text>
            </View>
          </View>
        </View>
        <Text style={styles.navigateTab}> My Plant / My Fav </Text>
        <View style={styles.cardBox}>
            <View style={styles.card}>
              <Image
                style={styles.myPlantImg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9-2S-eFYvaoD53d1OQFjU_Oo01j8KwaDQg&usqp=CAU',
                }}
              />
              <Text style={styles.cardTextName}> Dummy </Text>
              <TouchableOpacity>
                <Text style={styles.cardSeeDetail}> See Detail </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image
                style={styles.myPlantImg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9-2S-eFYvaoD53d1OQFjU_Oo01j8KwaDQg&usqp=CAU',
                }}
              />
              <Text style={styles.cardTextName}> Dummy </Text>
              <TouchableOpacity>
                <Text style={styles.cardSeeDetail}> See Detail </Text>
              </TouchableOpacity>
            </View>
                
            <View style={styles.card}>
              <Image
                style={styles.myPlantImg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9-2S-eFYvaoD53d1OQFjU_Oo01j8KwaDQg&usqp=CAU',
                }}
              />
              <Text style={styles.cardTextName}> Dummy </Text>
              <TouchableOpacity>
                <Text style={styles.cardSeeDetail}> See Detail </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.myPlantImg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9-2S-eFYvaoD53d1OQFjU_Oo01j8KwaDQg&usqp=CAU',
                }}
              />
              <Text style={styles.cardTextName}> Dummy </Text>
              <TouchableOpacity>
                <Text style={styles.cardSeeDetail}> See Detail </Text>
              </TouchableOpacity>
            </View>

        </View>
        <BottomNavBar/>
      </ScrollView>
    </View>
  );
}

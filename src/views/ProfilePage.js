import React, { useState } from "react";
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flexDirection: 'row',
  },
  headerBoxInfo: {
    width: 172,
  },
  tinyLogo: {
    width: 88,
    height: 88,
    borderRadius: 45,
    margin:16,
  },
  textName: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },

  textEmail: {
    color: '#828282',
    textAlign: 'center',
  },

  boxNumPlant: {
    backgroundColor: '#FDEFAB',
    borderRadius:10,
    textAlign: 'center',
    
  },

  textNumPlant: {
    color: '#828282'
  },

  cardBox: {
    // backgroundColor: 'red',
    width: 290,
    height: 290,
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap'
  },

  card: {
    // backgroundColor: 'yellow',
    width: 129,
    height: 129,
    margin: 8,
    borderWidth: 1,
    borderColor: '#828282', 
    borderRadius: 10  
  },

  myPlantImg: {
    width: 127,
    height: 88,
    borderRadius: 8,
    // margin:16,
  },

  cardTextName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  cardSeeDetail: {
    color: '#00B761',
    fontSize: 14,
    textAlign: 'center'
  }

});

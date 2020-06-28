import React, { useState } from "react";
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import { color } from "react-native-reanimated";

export default function FruitDetail(props) {
  // math random cuma ilustrasi untuk nanti kan data data nya berbeda beda
  let favor = false
  let rng = Math.ceil(Math.random() *6)
  if (rng > 3) favor = true

  const checkIfFavorTop = function() {
    // TESTING IF PROPS APAAN GITU NTAR IJO / PUTIH
    if (favor) return <View style={styles.boxFavTrue}></View>
    return <View style={styles.boxFavFalse}></View>
  }
  // 
  const toogleFav = function() {
    // kurang lebih nya dia nembak API ngirim data Lawan dari Favorite True atau False > Edit >
    // Fect Dispatch data ambil yg paling baru
    console.log(!favor)
  }

  const checkIfFavorBot = function() {
    if (favor) {
      return (
        <TouchableOpacity onPress={toogleFav}>
          <View style={styles.actionFavFalse}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8DxmsZBNcFIqvft4wi5XcbaoCQ-zZNKoKTw&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={toogleFav}>
          <View style={styles.actionFavFalse}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpMm9lbXCcUmtmlvkuEdMvjZNjL_6pqo9V4Q&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
  return (
    <View style={styles.container}>
        
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>How To Plant Banana</Text>
          {checkIfFavorTop()}
        </View>
        <Image
          style={styles.detailImg}
          source={{
            uri: 'https://gardenerspath.com/wp-content/uploads/2019/12/Overwinter-Banana-Plants-FB.jpg',
          }}
        />
        <Text style={styles.paragrafTitle}>Lorem Ipsum</Text>
        <Text style={styles.paragrafText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fringilla enim maecenas dapibus potenti odio nunc consectetur.
        Nec diam tortor etiam fermentum convallis nibh hendrerit. Et non quam vel, ac dui nunc mattis.
        Est, ultrices venenatis amet volutpat in ornare hendrerit. 
        Et semper iaculis tincidunt cursus ipsum arcu metus pharetra mollis.
        Ac volutpat vitae purus nisl, ultricies sed. Ipsum fames ac cursus fringilla fringilla quis.
        Nunc, amet lorem tincidunt posuere suspendisse sapien integer quam.
        </Text>

        <Text style={styles.paragrafTitle}>Lorem Ipsum</Text>
        <Text style={styles.paragrafText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fringilla enim maecenas dapibus potenti odio nunc consectetur.
          Nec diam tortor etiam fermentum convallis nibh hendrerit. Et non quam vel, ac dui nunc mattis.
          Est, ultrices venenatis amet volutpat in ornare hendrerit. 
          Et semper iaculis tincidunt cursus ipsum arcu metus pharetra mollis.
          Ac volutpat vitae purus nisl, ultricies sed. Ipsum fames ac cursus fringilla fringilla quis.
          Nunc, amet lorem tincidunt posuere suspendisse sapien integer quam.
        </Text>
      </ScrollView>
      <View style={styles.action}>
        {/* <View style={styles.}></View> */}
        {/* <View style={styles.actionPlant}></View> */}

        {checkIfFavorBot()}

        <TouchableOpacity>
          <View style={styles.actionPlant}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8DxmsZBNcFIqvft4wi5XcbaoCQ-zZNKoKTw&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Plant This</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF'
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: 360,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom:8,
  },

  boxFavTrue: {
    width: 32,
    height: 32,
    borderWidth:2,
    backgroundColor: '#00B761'
  },

  boxFavFalse: {
    width: 32,
    height: 32,
    borderWidth:2,
    backgroundColor: '#FFFFFF'
  },

  headerText: {
    fontSize: 24
  },

  detailImg: {
    marginTop: 8,
    width: 376,
    height: 212,
    borderRadius: 10
  },

  paragrafTitle: {
    paddingHorizontal: 16,
    paddingTop: 8,
    // textAlign: 'Left',
    fontSize: 24,
  },

  paragrafText: {
    color: '#828282',
    width: 417,
    paddingTop: 8,
    paddingHorizontal: 16,
  },

  action: {
    backgroundColor: '#00B761',
    // backgroundColor: 'red',
    width: "100%",
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionFavTrue: {
    padding: 16,
    paddingLeft: 96
  },

  actionFavFalse: {
    padding: 16,
    paddingLeft: 96
  },

  actionPlant: {
    padding: 16,
    paddingRight: 96
  },

  navMenuIcon: {
    alignSelf: 'center',
    height: 40,
    width: 40,
  },

  actionText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/bottomNavbarStyle'

export default function BottomNavBar() {
  return (
    <View style={{height: 55, flexDirection:'row', backgroundColor: 'white'}}>
      <TouchableOpacity>
        <View style={styles.navMenuBox}>
          <Image
            style={styles.navMenuIcon}
            source={{
              uri: 'https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
            }}
          />
          <Text style={styles.navMenuText}>Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.navMenuBox}>
          <Image
            style={styles.navMenuIcon}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXNhfba6-2IOxVOay_uPfTcjOtFWwIVKm-nw&usqp=CAU',
            }}
          />
          <Text style={styles.navMenuText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

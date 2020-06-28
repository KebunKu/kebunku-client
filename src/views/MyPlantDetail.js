import React, { useState } from "react";
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import styles from '../style/myPlantDetailStyle';

export default function MyPlantDetail() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://d3dv6ncga0u0ql.cloudfront.net/wp-content/uploads/2017/06/Choosing-Orange-Variety.jpg',
          }}
        />
        <View style={styles.paragrafBox}>
          <Text style={styles.paragrafTitle}>Orange is my fruit</Text>
          <Text style={styles.plantAge}>9 days old</Text>
          <Text style={styles.noteText}>Your notes :</Text>
          <Text style={styles.paragrafText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fringilla enim maecenas dapibus potenti odio nunc consectetur.
            Nec diam tortor etiam fermentum convallis nibh hendrerit. Et non quam vel, ac dui nunc mattis.
            Est, ultrices venenatis amet volutpat in ornare hendrerit. 
            Et semper iaculis tincidunt cursus ipsum arcu metus pharetra mollis.
            Ac volutpat vitae purus nisl, ultricies sed. Ipsum fames ac cursus fringilla fringilla quis.
            Nunc, amet lorem tincidunt posuere suspendisse sapien integer quam.
          </Text>
        </View>
      </ScrollView>
      <BottomNavBar/>
    </View>
  );
}
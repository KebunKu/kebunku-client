import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/plantToWaterStyle'
import PlantCard from '../component/PlantCard'

export default function PlantToWaterBox() {
  return (
    <View style={styles.waterToday}>
      <Text style={styles.heloUsername}>Halo Amir,</Text>
      <Text style={styles.planToWater}>5 tanaman belum disiram hari ini</Text>
      <ScrollView horizontal style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <PlantCard />
      </ScrollView>
    </View>
  );
}

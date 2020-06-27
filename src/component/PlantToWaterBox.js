import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/plantToWaterStyle'
import PlantCard from '../component/PlantCard'

export default function PlanToWaterCard() {
  return (
    <View style={styles.waterToday}>
      <Text style={styles.heloUsername}>Hello Brandon</Text>
      <Text style={styles.planToWater}>You Have 5 plants to water today</Text>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <PlantCard />
      </ScrollView>
    </View>
  );
}

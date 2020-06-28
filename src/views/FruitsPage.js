import React from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import FruitPageCard from '../component/FruitPageCard'

export default function FruitsPage () {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FruitPageCard/>
        <FruitPageCard/>
        <FruitPageCard/>
        <FruitPageCard/>
        <FruitPageCard/>
      </ScrollView>
      <BottomNavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})
import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/homePageStyle'
import PlanToWaterBox from '../component/PlantToWaterBox'
import FruitsCard from '../component/FruitsCard'
import VegetablesCard from '../component/VegetablesCard'
import BottomNavBar from '../component/BottomNavBar';
// import BottomNavBar from '../component/BottomNavBar'

export default function HomePage() { // PROPS
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

          <PlanToWaterBox />
          {/* Yang di bawah ini Komponen My Fruits */}
          <View style={styles.fruitContainer}>
            <Text style={styles.fruitTitle}>Fruits</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllBtn}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fruitContainer}>
            <FruitsCard/>
          </View>
          
          {/* Yang di bawah ini Komponen My Vegetable */}

          <View style={styles.fruitContainer}>
            <Text style={styles.fruitTitle}>Vegetables</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllBtn}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fruitContainer}>
            <VegetablesCard />
          </View>
      </ScrollView>
      <BottomNavBar/>
    </View>
  );
}

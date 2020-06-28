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
import styles from '../style/homePageStyle';
import {
  PlantToWaterBox,
  FruitsCard,
  VegetablesCard,
  BottomNavBar,
} from '../component';

export default function HomePage() {
  // PROPS
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <PlantToWaterBox />

        {/* Yang di bawah ini Komponen My Fruits */}

        <View style={styles.fruitContainer}>
          <Text style={styles.fruitTitle}>Fruits</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllBtn}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fruitContainer}>
          <FruitsCard />
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

      {/* Navbar */}

      <BottomNavBar />
    </View>
  );
}

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
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {

  const navigation = useNavigation();

  const toAllFruit = () => {
    navigation.navigate('FruitsPage');
  };

  const toAllVegetable = () => {
    navigation.navigate('VegetablesPage');
  };

  // PROPS
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <PlantToWaterBox />

        {/* Yang di bawah ini Komponen My Fruits */}

        <View style={styles.fruitContainer}>
          <Text style={styles.fruitTitle}>Fruits</Text>
          <TouchableOpacity onPress={() => toAllFruit()}>
            <Text style={styles.seeAllBtn}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fruitContainer}>
          <FruitsCard />
        </View>

        {/* Yang di bawah ini Komponen My Vegetable */}

        <View style={styles.fruitContainer}>
          <Text style={styles.fruitTitle}>Vegetables</Text>
          <TouchableOpacity onPress={() => toAllVegetable()}>
            <Text style={styles.seeAllBtn}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fruitContainer}>
          <VegetablesCard />
        </View>
      </ScrollView>
    </View>
  );
}

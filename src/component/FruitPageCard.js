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
import { useNavigation } from '@react-navigation/native';
import allPlantImage from '../../assets/image/allPlant/allPlantImage';
import styles from '../style/fruitPageCardStyle';

export default function FruitPageCard(props) {
  const navigation = useNavigation();

  const toDetailPage = (obj) => {
    navigation.navigate('FruitDetail', {
      obj,
    });
  };

  let image;

  for (let i = 0; i < allPlantImage.length; i++) {
    if (allPlantImage[i].imgName === props.fruit.name) {
      image = allPlantImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <Image style={styles.cardImg} source={image} />
        <View>
          <Text style={styles.cardTitle}>{props.fruit.name}</Text>
          <Text style={styles.cardText}>
            Scientific Name: {props.fruit.scientific_name}
          </Text>
          <Text style={styles.cardText}>
            Fase Generatif: {props.fruit.fase_generatif} hari
          </Text>
          <Text style={styles.cardText}>
            Fase Vegetatif: {props.fruit.fase_vegetatif} hari
          </Text>

          <TouchableOpacity onPress={() => toDetailPage(props.fruit)}>
            <Text style={styles.seeDetail}>See Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

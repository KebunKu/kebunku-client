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

export default function FruitPageCard(props) {
  const navigation = useNavigation();

  const toDetailPage = (obj) => {
    navigation.navigate('FruitDetail', {
      obj,
    });
  };

  let image;

  for (let i = 0; i < allPlantImage.length; i++) {
    if (allPlantImage[i].imgName === props.vegetable.name) {
      image = allPlantImage[i].uri;
    }
  }

  return (
    <View style={styles.cardBox}>
      <Image style={styles.cardImg} source={image} />
      <View>
        <Text style={styles.cardTitle}>{props.vegetable.name}</Text>
        <Text style={styles.cardText}>
          Scientific Name: {props.vegetable.scientific_name}
        </Text>
        <Text style={styles.cardText}>
          Fase Generatif: {props.vegetable.fase_generatif} hari
        </Text>
        <Text style={styles.cardText}>
          Fase Vegetatif: {props.vegetable.fase_vegetatif} hari
        </Text>

        <TouchableOpacity onPress={() => toDetailPage(props.vegetable)}>
          <Text style={styles.seeDetail}>See Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: '#FFFFFF',
    width: 360,
    height: 132,
    margin: 8,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
  },

  cardImg: {
    width: 100,
    height: 132,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 24,
  },

  cardFamilyText: {
    fontSize: 16,
    color: '#828282',
  },

  cardText: {
    fontSize: 14,
    color: '#828282',
    // height: 20,
    // maxHeight: 40,
    width: 250,
    flex: 1,
    flexWrap: 'wrap',
  },

  seeDetail: {
    color: '#00B761',
    marginBottom: 16,
  },
});

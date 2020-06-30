import React, { useState, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllFav } from '../store/actions';
import styles from '../style/fruitPageCardStyle';

export default function VegetablePageCard(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [favor, setFavor] = useState(false);
  const myFav = useSelector((state) => state.favReducer.favList);

  useEffect(() => {
    dispatch(fetchAllFav());
  }, [dispatch]);

  const toDetailPage = (obj) => {
    for (let i = 0; i < myFav.length; i++) {
      if (myFav[i].PlantId._id === obj._id) {
        setFavor(true);
      }
    }
    navigation.navigate('FruitDetail', {
      obj, favor
    });
  };

  let image;

  for (let i = 0; i < allPlantImage.length; i++) {
    if (allPlantImage[i].imgName === props.vegetable.name) {
      image = allPlantImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
}

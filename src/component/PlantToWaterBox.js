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
import styles from '../style/plantToWaterStyle';
import PlantCard from '../component/PlantCard';
import { fetchAllMyPlant, fetchAllFav } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PlantToWaterBox() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMyPlant());
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);

  return (
    <View style={styles.waterToday}>
      <Text style={styles.heloUsername}>Halo Amir,</Text>
      <Text style={styles.planToWater}>{myPlant.length} tanaman belum disiram hari ini</Text>
      <ScrollView
        horizontal
        style={styles.horizontalScroll}
        showsHorizontalScrollIndicator={false}>
        <PlantCard />
      </ScrollView>
    </View>
  );
}

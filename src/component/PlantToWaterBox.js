import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import styles from '../style/plantToWaterStyle';
import PlantCard from '../component/PlantCard';
import { fetchAllMyPlant } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PlantToWaterBox() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
  useEffect(() => {
    dispatch(fetchAllMyPlant());
    AsyncStorage.getItem('name').then((result) => {
      setName(result);
    });
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);

  return (
    <View style={styles.waterToday}>
      <Text style={styles.heloUsername}>Halo {name}</Text>
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

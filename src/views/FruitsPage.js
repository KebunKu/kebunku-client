import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPlant } from '../store/actions/index';
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
import BottomNavBar from '../component/BottomNavBar';
import FruitPageCard from '../component/FruitPageCard';

export default function FruitsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlant());
  }, [dispatch]);

  const plantList = useSelector((state) => state.plantReducer.plantList);
  const error = useSelector((state) => state.plantReducer.error);
  const loading = useSelector((state) => state.plantReducer.loading);

  const fruitList = plantList.filter((element) => {
    return element.category == 'Buah';
  });

  const images = {
    Alpukat: `../../assets/image/allPlant/Alpukat.jpg`,
    Anggur: `../../assets/image/allPlant/Anggur.jpg`,
    Apel: `../../assets/image/allPlant/Apel.jpg`,
    Belimbing: `../../assets/image/allPlant/Belimbing.jpg`,
    'Jambu biji': `../../assets/image/allPlant/Jambu.jpg`,
    Jeruk: `../../assets/image/allPlant/Jeruk.jpg`,
    Mangga: `../../assets/image/allPlant/Mangga.jpg`,
    Nanas: `../../assets/image/allPlant/Nanas.jpg`,
    Pisang: `../../assets/image/allPlant/Pisang.jpg`,
    Rambutan: `../../assets/image/allPlant/Rambutan.jpg`,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (
          <Text style={{ marginTop: 50 }}>Loading...</Text>
        ) : (
          <>
            {error ? (
              <Text style={{ marginTop: 50 }}>{error}</Text>
            ) : (
              <>
                {fruitList.map((fruit, i) => {
                  return (
                    <FruitPageCard
                      key={i}
                      fruit={fruit}
                      // image={require(images.fruit.name)}
                    />
                  );
                })}
              </>
            )}
          </>
        )}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

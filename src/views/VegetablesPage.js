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
import VegetablePageCard from '../component/VegetablePageCard';

export default function VegetablesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlant());
  }, [dispatch]);

  const plantList = useSelector((state) => state.plantReducer.plantList);
  const error = useSelector((state) => state.plantReducer.error);
  const loading = useSelector((state) => state.plantReducer.loading);

  // console.log(plantList, "plantlist vegetable =========")

  const vegetableList = plantList.filter((element) => {
    return element.category == 'Sayuran';
  });

  // console.log(vegetableList, "vegetableList =========")
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
                {vegetableList.map((vegetable, i) => {
                  return <VegetablePageCard key={i} vegetable={vegetable} />;
                })}
              </>
            )}
          </>
        )}
      </ScrollView>
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

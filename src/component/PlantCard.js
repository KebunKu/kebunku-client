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
import styles from '../style/plantCardStyle';

const PlantCard = () => {
  const navigation = useNavigation();

  const toDetailPage = () => {
    navigation.navigate('FruitDetail', {
      obj: {
        _id: '5ef849e4ac76c3346ce34aa6',
        name: 'Cabai Merah',
        scientific_name: 'Capsicum annuum L.',
        overview:
          "Cabai atau cabai merah adalah buah dan tumbuhan anggota genus Capsicum. Buahnya dapat digolongkan sebagai sayuran maupun bumbu, tergantung bagaimana digunakan. Sebagai bumbu, buah cabai yang pedas sangat populer di Asia Tenggara sebagai penguat rasa makanan. Bagi seni masakan Padang, cabai bahkan dianggap sebagai 'bahan makanan pokok' ke sepuluh (alih-alih sembilan). Sangat sulit bagi masakan Padang dibuat tanpa cabai.",
        fase_vegetatif: '20-30',
        fase_generatif: '40-90',
        category: 'Sayuran',
        __v: 0,
      },
    });
  };

  return (
    <>
      <TouchableOpacity onPress={() => toDetailPage()} >
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={require('../../assets/image/detail/Apel.jpg')}></ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Apel</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toDetailPage()}>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={require('../../assets/image/detail/Anggur.jpg')}></ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Anggur</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toDetailPage()}>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={require('../../assets/image/detail/Sawi.jpg')}></ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Sawi</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toDetailPage()}>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={require('../../assets/image/detail/Selada.jpg')}></ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Selada</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toDetailPage()}>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={require('../../assets/image/detail/Jeruk.jpg')}></ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Jeruk</Text>
        </View>
      </TouchableOpacity>

    </>

    
  );
};

export default PlantCard;

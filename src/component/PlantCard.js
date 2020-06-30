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
    navigation.navigate('MyPlant', {
      obj: {
        name: 'Wortel',
        age: 12,
        status: 'hidup',
        reminder: 7,
        pupuk: 'Pupuk cap 3 roda',
        notes: "Ini adalah contoh notes yang dibuat oleh user oleh karenanya wajib dirender"
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

import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
// import styles from '../style/fruitVegeCardStyle'
import styles from '../style/fruitVegeCardStyle'

export default function VegetablesCard() {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.fruitCard}>
          <ImageBackground
            style={styles.fruitCardImage}
            source={{
              uri: 'https://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1543595549.jpg',
            }}
          >
            <Text style={styles.fruitCardTitle}>Dummy</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.fruitCard}>
          <ImageBackground
            style={styles.fruitCardImage}
            source={{
              uri: 'https://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1543595549.jpg',
            }}
          >
            <Text style={styles.fruitCardTitle}>Dummy</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </>
  );
}

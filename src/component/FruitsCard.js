import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
// import styles from '../style/fruitVegeCardStyle'
import styles from '../style/homePageStyle'

export default function FruitsCard() {
  return (
    <>
    <TouchableOpacity>
      <View style={styles.fruitCard}>
        <ImageBackground
          style={styles.fruitCardImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQioIYpIr5c7BW4jNiUiLt-5W_-oK-i-I061w&usqp=CAU',
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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQioIYpIr5c7BW4jNiUiLt-5W_-oK-i-I061w&usqp=CAU',
          }}
        >
          <Text style={styles.fruitCardTitle}>Dummy</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </>
  );
}

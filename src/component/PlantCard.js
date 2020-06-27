import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/plantCardStyle'

const PlantCard = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardImage}
              source={{
                uri: 'https://ak.picdn.net/shutterstock/videos/1037437067/thumb/6.jpg',
              }}
            >
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>Dummy</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default PlantCard;

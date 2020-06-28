import React from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';

export default function FruitPageCard () {
  return (
    <View style={styles.cardBox}>
      <Image
        style={styles.cardImg}
        source={{
          uri: 'https://harvesttotable.com/wp-content/uploads/2009/01/Cabbage-bigstock-Salad-Species-That-Includes-Se-251274103-scaled.jpg',
        }}
      />
      <View>
        <Text style={styles.cardTitle}>Cabbage</Text>
        <Text style={styles.cardFamilyText}>Family : Musaceae</Text>
        <Text style={styles.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeDetail}>See Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: '#FFFFFF',
    width: 360,
    height: 132,
    margin: 8,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15
  },

  cardImg: {
    width: 100,
    height: 132,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 24
  },

  cardFamilyText: {
    fontSize: 16,
    color: '#828282'
  },

  cardText: {
    fontSize: 14,
    color: '#828282',
    // height: 20,
    // maxHeight: 40,
    width: 250,
    flex: 1,
    flexWrap: 'wrap'
  },

  seeDetail: {
    color: '#00B761',
    marginBottom: 16 
  }
})

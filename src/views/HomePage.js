import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
import styles from '../style/homePageStyle'
import PlanToWaterBox from '../component/PlantToWaterBox'

export default function HomePage() { // PROPS
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
          <PlanToWaterBox />
            {/* Yang di bawah ini Komponen My Fruits */}
          <View style={styles.fruitContainer}>
            <Text style={styles.fruitTitle}>Fruits</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fruitContainer}>

            <View style={styles.fruitCardContainer}>
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
            </View>

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
          </View>
          
          {/* Yang di bawah ini Komponen My Vegetable */}

          <View style={styles.fruitContainer}>
            <Text style={styles.fruitTitle}>Vegetables</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fruitContainer}>

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
          </View>
      </ScrollView>
      <View style={{height: 55, flexDirection:'row', backgroundColor: 'white'}}>

        <TouchableOpacity>
          <View style={styles.navMenuBox}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri: 'https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
              }}
            />
            <Text style={styles.navMenuText}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.navMenuBox}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXNhfba6-2IOxVOay_uPfTcjOtFWwIVKm-nw&usqp=CAU',
              }}
            />
            <Text style={styles.navMenuText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

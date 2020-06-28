import React, { useState, useEffect } from 'react';
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
import { color } from 'react-native-reanimated';
import styles from '../style/fruitDetailStyle';

export default function FruitDetail({ route }) {
  const [fruit, setFruit] = useState('');

  useEffect(() => {
    setFruit(route.params.obj);
  }, []);

  // math random cuma ilustrasi untuk nanti kan data data nya berbeda beda
  let favor = false;
  let rng = Math.ceil(Math.random() * 6);
  if (rng > 3) favor = true;

  const checkIfFavorTop = function () {
    // TESTING IF PROPS APAAN GITU NTAR IJO / PUTIH
    if (favor) return <View style={styles.boxFavTrue}></View>;
    return <View style={styles.boxFavFalse}></View>;
  };
  //
  const toogleFav = function () {
    // kurang lebih nya dia nembak API ngirim data Lawan dari Favorite True atau False > Edit >
    // Fect Dispatch data ambil yg paling baru
    console.log(!favor);
  };

  const checkIfFavorBot = function () {
    if (favor) {
      return (
        <TouchableOpacity onPress={toogleFav}>
          <View style={styles.actionFavFalse}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8DxmsZBNcFIqvft4wi5XcbaoCQ-zZNKoKTw&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={toogleFav}>
          <View style={styles.actionFavFalse}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpMm9lbXCcUmtmlvkuEdMvjZNjL_6pqo9V4Q&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Favourite</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>How To Plant {fruit.name}</Text>
          {checkIfFavorTop()}
        </View>
        <Image
          style={styles.detailImg}
          source={{
            uri:
              'https://gardenerspath.com/wp-content/uploads/2019/12/Overwinter-Banana-Plants-FB.jpg',
          }}
        />
        <Text style={styles.paragrafTitle}>Nama Buah</Text>
        <Text style={styles.paragrafText}>{fruit.name}</Text>

        <Text style={styles.paragrafTitle}>Nama Latin</Text>
        <Text style={styles.paragrafText}>{fruit.scientific_name}</Text>

        <Text style={styles.paragrafTitle}>Overview</Text>
        <Text style={styles.paragrafText}>{fruit.overview}</Text>

        <Text style={styles.paragrafTitle}>Fase Generatif</Text>
        <Text style={styles.paragrafText}>{fruit.fase_generatif}</Text>

        <Text style={styles.paragrafTitle}>Fase Vegetatif</Text>
        <Text style={styles.paragrafText}>{fruit.fase_vegetatif}</Text>
        <View style={{marginBottom: 50,}}></View>
      </ScrollView>
      <View style={styles.action}>
        {/* <View style={styles.}></View> */}
        {/* <View style={styles.actionPlant}></View> */}

        {checkIfFavorBot()}

        <TouchableOpacity>
          <View style={styles.actionPlant}>
            <Image
              style={styles.navMenuIcon}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8DxmsZBNcFIqvft4wi5XcbaoCQ-zZNKoKTw&usqp=CAU',
              }}
            />
            <Text style={styles.actionText}>Plant This</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

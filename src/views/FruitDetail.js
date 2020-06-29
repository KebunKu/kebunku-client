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
  AsyncStorage,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postFavorite, deleteFavorite, postUserPlant } from '../store/actions/index';
import styles from '../style/fruitDetailStyle';
import detailImage from '../../assets/image/detail/detailImage';

export default function FruitDetail({ route }) {
  const [fruit, setFruit] = useState('');
  const dispatch = useDispatch();

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

  const plantThis = function (PlantId) {
    return dispatch(postUserPlant('5ef978cfa4dd0e33b0deadd7'))
  }
  
  const toogleFav = async function (PlantId) {
    if (!favor) return dispatch(postFavorite('5ef978cfa4dd0e33b0deadd7'))
    return dispatch(deleteFavorite('5ef978cfa4dd0e33b0deadd7'))
  };

  const checkIfFavorBot = function () {
    if (favor) {
      return (
        <TouchableOpacity onPress={()=> toogleFav(fruit.name, fruit.scientific_name)}>
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
        <TouchableOpacity onPress={()=> toogleFav(fruit.name, fruit.scientific_name)}>
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

  let image;

  for (let i = 0; i < detailImage.length; i++) {
    if (detailImage[i].imgName === fruit.name) {
      image = detailImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>How To Plant {fruit.name}</Text>
          {checkIfFavorTop()}
        </View>
        <Image
          style={styles.detailImg}
          source={image}
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
        <View style={{ marginBottom: 50 }}></View>
      </ScrollView>
      <View style={styles.action}>
        {/* <View style={styles.}></View> */}
        {/* <View style={styles.actionPlant}></View> */}

        {checkIfFavorBot()}

        <TouchableOpacity onPress={()=> plantThis(fruit.name, fruit.scientific_name)}>
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

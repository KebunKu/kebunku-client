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
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BottomNavBar from '../component/BottomNavBar';
import styles from '../style/profilePageStyle';
import { fetchAllMyPlant, fetchAllFav } from '../store/actions';
import detailImage from '../../assets/image/detail/detailImage';

export default function App({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMyPlant());
    dispatch(fetchAllFav());
    AsyncStorage.getItem('name').then((result) => {
      setName(result);
    });
    AsyncStorage.getItem('email').then((result) => {
      setEmail(result);
    });
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);
  const errorMyPlant = useSelector((state) => state.userPlantReducer.error);
  const loadingMyPlant = useSelector((state) => state.userPlantReducer.loading);

  const myFav = useSelector((state) => state.favReducer.favList);
  const errorMyFav = useSelector((state) => state.favReducer.error);
  const loadingMyFav = useSelector((state) => state.favReducer.loading);

  // console.log(myFav, 'favorite ==========');

  const toMyPlantDetail = (plant) => {
    navigation.navigate('MyPlant', {
      obj: plant,
    });
  };

  const toDetailPage = (fav) => {
    // console.log(fav, "ini fav =====")
    navigation.navigate('FruitDetail', {
      obj: fav.PlantId,
      favor: true
    });
  };
  
  const logOut = () => {
    AsyncStorage.clear();
    navigation.navigate('Landing');
  };

  let image;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/President_Suharto%2C_1983.jpg/170px-President_Suharto%2C_1983.jpg',
            }}
          />
          <View style={styles.headerBoxInfo}>
            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textEmail}>{email}</Text>
            <View style={styles.boxNumPlant}>
              <Text style={styles.textNumPlant}>
                has {myPlant.length} plants in the garden
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.myPlant}> My Plant </Text>
        </View>

        {loadingMyPlant ? (
          <Text>Loading..</Text>
        ) : (
          <>
            {errorMyPlant ? (
              <Text>{error.message}</Text>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {myPlant.map((plant, i) => {
                  for (let i = 0; i < detailImage.length; i++) {
                    if (detailImage[i].imgName === plant.PlantId.name) {
                      image = detailImage[i].uri;
                    }
                  }
                  return (
                    <View key={i} style={styles.fruitContainer}>
                      <TouchableOpacity onPress={() => toMyPlantDetail(plant)}>
                        <View style={styles.overlay}>
                          <Text></Text>
                        </View>
                        <View style={styles.fruitCard}>
                          <ImageBackground
                            style={styles.fruitCardImage}
                            source={image}></ImageBackground>
                        </View>
                        <Text style={styles.fruitCardTitle}>
                          {plant.PlantId.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            )}
          </>
        )}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.myPlant}> My Favourite </Text>
        </View>

        {loadingMyFav ? (
          <Text>Loading..</Text>
        ) : (
          <>
            {errorMyFav ? (
              <Text>{error.message}</Text>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {!myFav.length ? (
                  <Text style={{ marginTop: 15 }}>
                    Belum menambahkan favorite
                  </Text>
                ) : (
                  <>
                    {myFav.map((fav, i) => {
                      for (let i = 0; i < detailImage.length; i++) {
                        if (detailImage[i].imgName === fav.PlantId.name) {
                          image = detailImage[i].uri;
                        }
                      }
              
                      return (
                        <View key={i} style={styles.fruitContainer}>
                          <TouchableOpacity
                            onPress={() => toDetailPage(fav)}>
                            <View style={styles.overlay}>
                              <Text></Text>
                            </View>
                            <View style={styles.fruitCard}>
                              <ImageBackground
                                style={styles.fruitCardImage}
                                source={image}></ImageBackground>
                            </View>
                            <Text style={styles.fruitCardTitle}>
                              {fav.PlantId.name}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </>
                )}
              </ScrollView>
            )}
          </>
        )}

        <TouchableOpacity style={styles.logout} onPress={() => logOut()}>
          <Text style={styles.textBtn}>Log out</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 30 }}>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

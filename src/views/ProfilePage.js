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
import { fetchAllMyPlant } from '../store/actions';
// import {} from '../../assets/image/detail/'

export default function App({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMyPlant());
    AsyncStorage.getItem('name').then((result) => {
      setName(result);
    });
    AsyncStorage.getItem('email').then((result) => {
      setEmail(result);
    });
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);
  const error = useSelector((state) => state.userPlantReducer.error);
  const loading = useSelector((state) => state.userPlantReducer.loading);

  const toMyPlantDetail = (plant) => {
    navigation.navigate('MyPlant', {
      obj: plant
    });
  };

  const logOut = () => {
    AsyncStorage.clear();
    navigation.navigate('Landing');
  };

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

        {/* {loading && <Text>Loading..</Text>} */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {myPlant.map((plant, i) => {
            return (
              <View key={i} style={styles.fruitContainer}>
                <TouchableOpacity
                  
                  onPress={() => toMyPlantDetail(plant)}>
                  <View style={styles.overlay}>
                    <Text></Text>
                  </View>
                  <View style={styles.fruitCard}>
                    <ImageBackground
                      style={styles.fruitCardImage}
                      source={require('../../assets/image/detail/Jeruk.jpg')}></ImageBackground>
                  </View>
                  <Text style={styles.fruitCardTitle}>
                    {plant.PlantId.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.myPlant}> My Favourite </Text>
        </View>

        <View style={styles.fruitContainer}>
          <TouchableOpacity onPress={() => toApplePage()}>
            <View style={styles.overlay}>
              <Text></Text>
            </View>
            <View style={styles.fruitCard}>
              <ImageBackground
                style={styles.fruitCardImage}
                source={require('../../assets/image/detail/Apel.jpg')}></ImageBackground>
            </View>
            <Text style={styles.fruitCardTitle}>Apel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toAnggurPage()}>
            <View style={styles.overlay}>
              <Text></Text>
            </View>
            <View style={styles.fruitCard}>
              <ImageBackground
                style={styles.fruitCardImage}
                source={require('../../assets/image/detail/Anggur.jpg')}></ImageBackground>
            </View>
            <Text style={styles.fruitCardTitle}>Anggur</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 40 }} onPress={() => logOut()}>
          <Text>Log out</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 30 }}>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

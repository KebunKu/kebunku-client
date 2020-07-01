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
  Modal,
  ToastAndroid,
} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import styles from '../style/myPlantDetailStyle';
import detailImage from '../../assets/image/detail/detailImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { editUserPlant, deleteUserPlant } from '../store/actions';
import { useDispatch } from 'react-redux';

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function MyPlantDetail({ route, navigation }) {
  const plant = route.params.obj;
  const [visibleToast, setvisibleToast] = useState(false);
  const [toastDelete, setToastDelete] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  useEffect(() => setvisibleToast(false), [visibleToast]);

  const dispatch = useDispatch();

  const backBtn = () => {
    navigation.navigate('Profile');
  };

  const editBtn = (plant) => {
    navigation.navigate('PlantThisPage', {
      plant,
    });
  };
  

  const handleSiram = (plant) => {
    setvisibleToast(true);
    dispatch(editUserPlant(plant));
    navigation.goBack();
  };

  const confirmDelete = () => {
    setModalDelete(!modalDelete);
  };

  const deleteMyPlant = (id) => {
    dispatch(deleteUserPlant(id));
    setToastDelete(true);
    navigation.goBack();
  }

  let image;

  for (let i = 0; i < detailImage.length; i++) {
    if (detailImage[i].imgName === plant.PlantId.name) {
      image = detailImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <View>
            <TouchableOpacity onPress={() => backBtn()}>
              <MaterialCommunityIcons
                name="arrow-left"
                style={styles.backBtn}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => editBtn(plant)}>
              <MaterialCommunityIcons name="pencil" style={styles.pencil} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => confirmDelete()}>
              <MaterialCommunityIcons name="delete" style={styles.pencil} />
            </TouchableOpacity>
            <View style={styles.centeredView}>
              <Toast visible={toastDelete} message="Sukses menghapus!" />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalDelete}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hapus tanaman {plant.PlantId.name} dari kebun anda ?</Text>

                    <TouchableOpacity
                      style={{ ...styles.openButton, backgroundColor: "#f00" }}
                      onPress={() => {
                        deleteMyPlant(plant._id);
                      }}
                    >
                      <Text style={styles.textStyle}>Hapus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                      onPress={() => {
                        setModalDelete(!modalDelete);
                      }}
                    >
                      <Text style={styles.textStyle}>Batal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>

            <Text style={styles.paragrafTitle}>{plant.PlantId.name}</Text>
            <Text style={styles.subtitle}>Umur</Text>
            <Text style={styles.plantAge}>{plant.plant_age} hari</Text>

            <Text style={styles.subtitle}>Status</Text>
            <Text style={styles.plantAge}>{plant.status}</Text>

            <Text style={styles.subtitle}>Diingatkan</Text>
            <Text style={styles.plantAge}>
              Setiap {plant.water_reminder} jam
            </Text>

            <Text style={styles.subtitle}>Pupuk</Text>

            {!plant.pupuk ? (
              <Text style={styles.plantAge}>-</Text>
            ) : (
              <Text style={styles.plantAge}>{plant.pupuk}</Text>
            )}

            <Text style={styles.subtitle}>Catatan</Text>
            {!plant.notes ? (
              <Text style={styles.plantAge}>-</Text>
            ) : (
              <Text style={styles.plantAge}>{plant.notes}</Text>
            )}
          </View>
        </View>
        <Image style={styles.imagePlant} source={image} />
        <View style={styles.backgroundWhite}>
          <View>
            {
              plant.watered ? 
              (<Image
                source={require('../../assets/image/element/character.png')}
              />) : (<Image
              source={require('../../assets/image/element/character_cry.png')}
            />) 
            }
          </View>
          {!plant.watered && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSiram(plant)}>
              <Toast visible={visibleToast} message="Sukses menyiram!" />
              <Text style={styles.textButton}>Tanaman sudah disiram</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* <TouchableOpacity onPress={() => toMyPlantDetail()}>
          <Text style={styles.cardSeeDetail}> Sudah di siram </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}

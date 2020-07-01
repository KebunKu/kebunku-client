import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { postUserPlant } from '../store/actions/index';

export default function PlantThisPage({ route, navigation }) {
  const PlantId = route.params.PlantId;
  const dispatch = useDispatch();
  //dapet PlantID dari pas nge click button Plant THIS ???

  const [ValidationText, setValid] = useState('');
  const [notes, setNotes] = useState('');
  const [reminder, setReminder] = useState(1);
  const [plantedDate, setDate] = useState('');
  const [pupuk, setPupuk] = useState('');

  const submitPlant = function () {
    if (notes && reminder && pupuk) {
      let dataPlant = { PlantId, notes, reminder, plantedDate, pupuk };
      console.log(dataPlant, 'dataPlant ===========');
      setNotes('');
      setReminder(1);
      setDate('');
      setPupuk('');
      navigation.navigate('Home');
      dispatch(postUserPlant(dataPlant));
    } else {
      setValid('Data belum Lengkap');
    }
  };
  const cancle = function () {
    setNotes('');
    setReminder(1);
    setDate('');
    setPupuk('');
  };

  return (
    <View style={styles.container}>
      <Text>{ValidationText}</Text>
      {/* <View style={styles.rowContainerImg}>
        <Text style={styles.textPlantThis}>
          Nama Dari Klik Tombol Plant This
        </Text>
        <Image
          style={styles.imgPlantThis}
          source={{
            uri:
              'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg',
          }}
        />
      </View> */}

      <View style={styles.form}>
        <TextInput
          style={styles.inputBox}
          placeholder="Catatan"
          placeholderTextColor="#828282"
          multiline={true}
          onChange={(e) => setNotes(e.nativeEvent.text)}
          value={notes}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Reminder (dalam jam)"
          placeholderTextColor="#828282"
          onChange={(e) => setReminder(e.nativeEvent.text)}
          keyboardType={'numeric'}
          value={reminder}
        />

        <DatePicker
          style={styles.inputDate}
          date={plantedDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Pilih Tanggal"
          format="YYYY-MM-DD"
          minDate="2016-01-01"
          maxDate="2026-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Pupuk"
          placeholderTextColor="#828282"
          onChange={(e) => setPupuk(e.nativeEvent.text)}
          value={pupuk}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={submitPlant}>
            <Text style={styles.buttonCancle}>Tanam</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cancle}>
            <Text style={styles.buttonSubmit}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgPlantThis: {
    width: wp('40%'),
    height: wp('45%'),
    padding: hp('1%'),
    marginHorizontal: hp('10%'),
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
  },

  textPlantThis: {
    width: wp('20%'),
  },

  inputBox: {
    backgroundColor: 'white',
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
  },

  form: {
    alignItems: 'center',
    // backgroundColor: '#00B761',
    padding: hp('2%'),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00B761',
  },

  inputDate: {
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
    backgroundColor: 'white',
  },

  rowContainer: {
    flexDirection: 'row',
  },

  rowContainerImg: {
    flex: 1,
    flexDirection: 'row',
    width: wp('70%'),
    paddingTop: wp('15%'),
    padding: wp('2%'),
    // borderWidth: 3,
    // padding: hp('4%'),
    // marginHorizontal: hp('5%')
  },

  buttonSubmit: {
    // backgroundColor: '#00B761',
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B761',
  },

  buttonCancle: {
    backgroundColor: '#00B761',
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
  },
});

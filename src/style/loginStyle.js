import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  element: {
    marginTop: hp('7%'),
    alignItems: 'center',
    marginBottom: -hp('73%'),
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
  },

  elementBottom: {
    transform: [{ rotate: '180deg' }],
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    marginTop: -hp('75%'),
    marginLeft: -wp('30%'),
    zIndex: -99
    
  },

  started: {
    textAlign: 'left',
    fontSize: wp('9%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  inputBox: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    paddingLeft: wp('2%'),
    fontSize: 16,
    color: '#828282',
    backgroundColor: 'white',
    margin: 8,
  },

  textOr: {
    // fontFamily: 'roboto',
    fontWeight: 'bold',
    color: '#828282',
    margin: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },

  textBig: {
    // fontFamily: 'roboto',
    textAlign: 'left',
    fontSize: wp('15%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  textSmall: {
    // fontFamily: 'roboto',
    marginBottom: -hp('2%'),
    textAlign: 'left',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  textMini: {
    // fontFamily: 'roboto',
    textAlign: 'center',
    fontSize: wp('3.7%'),
    // fontWeight: 'bold',
    color: '#00B761',
  },

  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('70%'),
    height: hp('6%'),
    // padding: 8,
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
  },

  buttonGoogle: {
    backgroundColor: '#395EE1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('70%'),
    height: hp('6%'),
    padding: 8,
    margin: 8,
  },
});

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  background: {
    width: wp('100%'),
    height: hp('75%'),
    backgroundColor: '#00B761',
    paddingTop: hp('3%'),
    paddingHorizontal: wp('4%'),
  },

  backBtn: {
    color: 'white',
    fontSize: wp('7%')
    // width: wp('15%'),
    // height: hp('15%')
  },

  backgroundWhite: {
    width: wp('100%'),
    marginTop: hp('14%'),
    height: hp('30%'),
    backgroundColor: '#E5F8EF',
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
  },

  button: {
    width: wp('90%'),
    height: hp('6%'),
    backgroundColor: '#00B761',
    marginTop: hp('2%'),
    borderRadius: wp('2%'),
  },

  textButton: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontSize: wp('4%'),
    color: 'white',
  },

  paragrafTitle: {
    fontSize: wp('10%'),
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: hp('2%'),
    fontSize: wp('5%'),
    color: 'white',
    fontWeight: 'bold',
  },

  plantAge: {
    fontSize: wp('4%'),
    color: 'white',
  },

  imagePlant: {
    width: wp('40%'),
    height: hp('30%'),
    backgroundColor: 'red',
    borderRadius: wp('5%'),
    marginLeft: wp('55%'),
    marginTop: -hp('55%'),
    borderWidth: wp('1%'),
    borderColor: 'white',
  },

  noteText: {
    fontSize: 16,
    color: '#828282',
  },

  paragrafText: {
    fontSize: 14,
    color: '#828282',
  },
});

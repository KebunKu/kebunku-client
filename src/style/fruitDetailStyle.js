import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: '#E5F8EF',
    paddingHorizontal: wp('3%'),
  },

  headerText: {
    marginTop: hp('2%'),
    fontSize: wp('6%'),
  },

  boxFav: {
    width: wp('9%'),
    height: hp('5%'),
    marginLeft: wp('85%'),
    marginTop: -hp('4%'),
    marginBottom: hp('2%'),
    // borderWidth:2,
    backgroundColor: '#BCECD6',
    // borderColor: 'red',
    borderRadius: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveBtnTrue: {
    color: '#00B761',
    fontSize: wp('6%')
  },

  saveBtnBottom: {
    color: 'white',
    fontSize: wp('8%')
  },

  detailImg: {
    // marginTop: 8,
    width: wp('93%'),
    // height: 212,
    borderRadius: 10,
  },

  paragrafTitle: {
    marginTop: hp('2%'),
    // paddingHorizontal: 16,
    // paddingTop: 8,
    // textAlign: 'Left',
    fontSize: wp('5%'),
  },

  paragrafText: {
    color: '#828282',
    // width: 417,
    // paddingTop: 8,
    // paddingHorizontal: 16,
  },

  action: {
    // paddingHorizontal: wp('0%'),
    marginLeft: -wp('3%'),
    // marginTop: hp('3%'),
    backgroundColor: '#00B761',
    width: wp('100%'),
    height: hp('10%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionText: {
    textAlign: 'center',
    color: 'white',
  },

  actionFavTrue: {
    // padding: 16,
    // paddingLeft: 96,
  },

  actionFavFalse: {
    // padding: 16,
    // paddingLeft: 96,
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp('19%')
  },

  actionPlant: {
    alignItems: 'center',
    marginTop: hp('1%'),
    marginRight: wp('19%')
  },

  navMenuIcon: {
    alignSelf: 'center',
    height: 40,
    width: 40,
  },

  
});

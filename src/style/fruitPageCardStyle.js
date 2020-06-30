import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E5F8EF',
    width: wp('100%'),
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
  },
  cardBox: {
    backgroundColor: '#FFFFFF',
    // width: 360,
    // height: 132,
    // marginVertical: hp('1%'),
    // flex: 1,
    flexDirection: 'row',
    borderRadius: wp('5%'),
  },

  cardImg: {
    // width: 100,
    // height: 132,
    borderTopLeftRadius: wp('5%'),
    borderBottomLeftRadius: wp('5%'),
    marginRight: wp('4%'),
  },

  cardTitle: {
    fontSize: wp('6%'),
  },

  cardText: {
    fontSize: wp('3.5%'),
    color: '#828282',
    marginTop: hp('0.5%')
    // height: 20,
    // maxHeight: 40,
    // width: 250,
    // flex: 1,
    // flexWrap: 'wrap',
  },

  seeDetail: {
    color: '#00B761',
    marginTop: hp('1%'),
    fontSize: wp('3.5%'),
  },
});

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: hp('10%')
  },

  scroll: {
    flex: 1,
    backgroundColor: '#E5F8EF',
  },

  divider: {
    marginTop: hp('3%'),
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 0.5,
  },

  fruitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5F8EF',
    paddingHorizontal: wp('3%'),
  },

  fruitTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
  },

  seeAllBtn: {
    fontSize: 16,
    color: '#00B761',
    marginTop: hp('3%'),
  },
});

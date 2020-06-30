import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({

  heloUsername: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: hp('2%'),
    paddingLeft: wp('3%'),
  },

  planToWater: {
    fontSize: 16,
    color: '#A7A7A7',
    paddingLeft: wp('3%'),
  },

  horizontalScroll: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: wp('3%'),
  },
});

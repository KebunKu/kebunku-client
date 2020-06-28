import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  waterToday: {
    backgroundColor: '#F7F7F5',
    width: 360,
  },

  heloUsername: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#323232',
  },

  horizontalScroll: {
    flexDirection: 'row',
    // flex: 1
  },

  planToWater: {
    fontSize: 16,
    color: '#C4C4C4',
  },

  waterTodayText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  allCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },

  card: {
    marginRight: 4,
    width: 80,
    height: 80,
    borderRadius: 50,
    // overflow: 'hidden',
    borderColor: '#00B761',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: undefined
    // padding: 32
  },

  innerImage: {
    width: 68,
    height: 68,
    borderRadius: 50,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    // marginTop:12,
    textAlign: 'center',
    // marginTop: 4,
    // marginLeft: 16
  },

  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
    // flex: 1,
  },
});

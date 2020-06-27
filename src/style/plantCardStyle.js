import {StyleSheet} from 'react-native'

export default StyleSheet.create({

  waterToday: {
    backgroundColor: '#F7F7F5',
    width: 360,
  },

  heloUsername: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  horizontalScroll: {
    flexDirection:'row',
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

  containerCard: {
    marginLeft:16,
    // borderRadius:16,
  },

  card: {
    width:80,
    height:80,
    borderRadius:45,
    overflow : "hidden",
    borderColor: '#00B761',
    borderWidth: 3
  },

  cardTitle: {
    fontSize:13,
    fontWeight:'bold',
    color:'#000000',
    marginTop:12,
    textAlign:'center',
    marginTop: 0,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // borderRadius:16,
    flex:1,
  },

})
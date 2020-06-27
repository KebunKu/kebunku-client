import {StyleSheet} from 'react-native'

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop:16
  },

  // TEMPORARY STYLEING CARD NANTI DI BUATKAN FOLDER STYLE NYA SENDIRI KHUSU CARD
  // TEMPORARY STYLEING MY FRUITS / MY VEGETABLES NANTI DI BUATKAN FOLDER STYLE NYA SENDIRI KHUSU CARD

  fruitContainer: {
    marginTop: 8,
    flexDirection:'row',
    justifyContent:'space-between',
    // marginBottom:16,
    paddingHorizontal:16,
    backgroundColor: '#FFFFFF',
  },

  fruitTitle: {
    fontSize:20,
    fontWeight:'bold',
    color:'#1C1C1C'
    
  },

  seeAllBtn: {
    fontSize:16,
    // fontWeight:'bold',
    color:'#00B761'
  },

  // fruitCardContainer: {
  //   // marginRight:8,
  // },

  fruitCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius:16,
    flex:1, 
  },

  fruitCard: {
    overflow : "hidden",
    borderRadius:16,
    width:150,
    height:150,
    margin: 8,
  },

  fruitCardTitle: {
    fontSize:16,
    fontWeight:'bold',
    color:'#FFFFFF',
    // marginTop:12,
    paddingLeft: 16,
    // textAlign:'center',
    marginTop: 128,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  navMenuBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  navMenuIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 60
  },

  navMenutext: {
    fontSize:16,
    color: '#545454',
    marginTop: 4}
})
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
})
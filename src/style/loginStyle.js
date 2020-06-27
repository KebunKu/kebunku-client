import {StyleSheet} from 'react-native'

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    // flex:1,
  },

  welcome: {
    textAlign: 'center'
  },

  inputBox: {
    width:320,
    height: 40,
    backgroundColor:'#fff',
    // borderRadius: 25,
    padding:8,
    fontSize:16,
    color:'#828282',
    // marginVertical: 10,
    borderColor: "#000",
    margin: 8,
  },

  RegLogLogoImg: {
    width:undefined,
    height:undefined,
    resizeMode:'contain',
    flex:1
  },

  RegLogLogoBox: {
    width:150,
    height:150,
    borderRadius:10
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
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#323232'
    
  },

  textSmall: {
    // fontFamily: 'roboto',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#828282'
  },

  textMini: {
    // fontFamily: 'roboto',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#828282'
  },

  buttonBox: {
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 320,
    height: 40,
    padding: 8,
    margin: 8,
  }

});
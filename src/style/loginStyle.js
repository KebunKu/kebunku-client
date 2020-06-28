import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    // flex:1,
  },

  // welcome: {
  //   textAlign: 'center'
  // },

  focus: {
    borderWidth: 5,
    borderColor: '#00B761'
  },

  inputBox: {
    width: 320,
    height: 48,
    backgroundColor: '#fff',
    // borderRadius: 25,
    padding: 8,
    fontSize: 16,
    color: '#828282',
    // marginVertical: 10,
    // borderColor: '#000',
    margin: 8,
  },

  RegLogLogoBox: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  RegLogLogoImg: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
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
    color: '#323232',
  },

  textSmall: {
    // fontFamily: 'roboto',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#828282',
  },

  textMini: {
    // fontFamily: 'roboto',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#828282',
  },

  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 320,
    height: 48,
    padding: 8,
    margin: 8,
  },

  buttonGoogle: {
    backgroundColor: '#395EE1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 320,
    height: 48,
    padding: 8,
    margin: 8,
  },
});

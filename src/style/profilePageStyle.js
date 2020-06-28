import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flexDirection: 'row',
  },
  headerBoxInfo: {
    width: 172,
  },
  tinyLogo: {
    width: 88,
    height: 88,
    borderRadius: 45,
    margin:16,
  },
  textName: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },

  textEmail: {
    color: '#828282',
    textAlign: 'center',
  },

  boxNumPlant: {
    backgroundColor: '#FDEFAB',
    borderRadius:10,
    textAlign: 'center',
    
  },

  textNumPlant: {
    color: '#828282'
  },

  cardBox: {
    // backgroundColor: 'red',
    width: 290,
    height: 290,
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap'
  },

  card: {
    // backgroundColor: 'yellow',
    width: 129,
    height: 129,
    margin: 8,
    borderWidth: 1,
    borderColor: '#828282', 
    borderRadius: 10  
  },

  myPlantImg: {
    width: 127,
    height: 88,
    borderRadius: 8,
    // margin:16,
  },

  cardTextName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  cardSeeDetail: {
    color: '#00B761',
    fontSize: 14,
    textAlign: 'center'
  }
})
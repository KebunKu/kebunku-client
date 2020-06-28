import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 360,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom:8,
  },

  boxFavTrue: {
    width: 32,
    height: 32,
    borderWidth:2,
    backgroundColor: '#00B761'
  },

  boxFavFalse: {
    width: 32,
    height: 32,
    borderWidth:2,
    backgroundColor: '#FFFFFF'
  },

  headerText: {
    fontSize: 24
  },

  detailImg: {
    marginTop: 8,
    width: 376,
    height: 212,
    borderRadius: 10
  },

  paragrafTitle: {
    paddingHorizontal: 16,
    paddingTop: 8,
    // textAlign: 'Left',
    fontSize: 24,
  },

  paragrafText: {
    color: '#828282',
    width: 417,
    paddingTop: 8,
    paddingHorizontal: 16,
  },

  action: {
    backgroundColor: '#00B761',
    width: "100%",
    height: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionFavTrue: {
    padding: 16,
    paddingLeft: 96
  },

  actionFavFalse: {
    padding: 16,
    paddingLeft: 96
  },

  actionPlant: {
    padding: 16,
    paddingRight: 96
  },

  navMenuIcon: {
    alignSelf: 'center',
    height: 40,
    width: 40,
  },

  actionText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
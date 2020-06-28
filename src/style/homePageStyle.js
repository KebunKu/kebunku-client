import { StyleSheet } from 'react-native';

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
  },

  fruitContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  fruitTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },

  seeAllBtn: {
    fontSize: 16,
    color: '#00B761',
  },
});

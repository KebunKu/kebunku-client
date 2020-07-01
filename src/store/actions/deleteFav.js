import axios from 'axios';
import {fetchAllFav} from './getAllFav'
import { AsyncStorage } from 'react-native';

export const DELETE_FAV = 'DELETE_FAV';

export const deleteFavorite = (id) => {
  
  return (dispatch) => {
    console.log('masuk delete ===========')
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'DELETE',
        url: `http://192.168.0.111:3000/userfav/${id}`,
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        dispatch(fetchAllFav())
      })
      .catch((error) => {
        console.log(error)
      });
    });
  };
};

import axios from 'axios';
import {fetchAllFav} from './getAllFav'
import { AsyncStorage } from 'react-native';

export const DELETE_USER_PLANT = 'DELETE_USER_PLANT';

export const deleteFavorite = (id) => {
  
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'DELETE',
        url: `http://192.168.43.189:3000/userplant/${id}`,
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

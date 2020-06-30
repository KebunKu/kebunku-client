import axios from 'axios';
import {fetchAllMyPlant} from './getAllFav'
import { AsyncStorage } from 'react-native';

export const DELETE_FAV = 'DELETE_FAV';

export const deleteFavorite = (id) => {
  
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/userfav/${id}`,
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        dispatch(fetchAllMyPlant())
      })
      .catch((error) => {
        console.log(error)
      });
    });
  };
};
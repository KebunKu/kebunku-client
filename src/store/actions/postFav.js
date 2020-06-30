import axios from 'axios';
import { fetchAllFav } from './getAllFav'
import { AsyncStorage } from 'react-native';

export const POST_FAVORITE = 'POST_FAVORITE';

export const postFavorite = (PlantId) => {
  console.log('masuk ========')
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'POST',
        url: 'http://192.168.0.111:3000/userfav',
        data: {PlantId},
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
    })
  };
};

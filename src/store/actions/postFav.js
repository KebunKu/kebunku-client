import axios from 'axios';
import { fetchAllFav } from './getAllFav'
import { AsyncStorage } from 'react-native';

export const POST_FAVORITE = 'POST_FAVORITE';

export const postFavorite = (PlantId) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/userfav',
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

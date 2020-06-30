import axios from 'axios';
import { fetchAllMyPlant } from './getUserPlant'
import { AsyncStorage } from 'react-native';

export const POST_USER_PLANT = 'POST_USER_PLANT';

export const postUserPlant = (PlantId) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
    
      axios({
        method: 'POST',
        url: 'http://192.168.43.189:3000/userplant',
        // mungkin nanti Object Plant keseluruhan ?
        data: {PlantId},
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
    })
  };
};

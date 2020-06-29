import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const FETCH_All_USER_PLANT = 'FETCH_All_USER_PLANT';

export const fetchAllMyPlant = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_All_USER_PLANT,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    })
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/userplant',
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        console.log(data, 'INI DATA USER PLANT')
        dispatch({
          type: FETCH_All_USER_PLANT,
          payload: {
            data: data.Plants,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_USER_PLANT,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
    })
  };
};
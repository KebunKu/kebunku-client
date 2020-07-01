import axios from 'axios';
import { fetchAllMyPlant } from './getUserPlant';
import { AsyncStorage } from 'react-native';

export const EDIT_USER_PLANT = 'EDIT_USER_PLANT';

export const editUserPlant = (dataPlant) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'PUT',
        url: `http://192.168.0.111:3000/userplant/${dataPlant._id}`,
        // mungkin nanti Object Plant keseluruhan ?
        data: {
          PlantId: dataPlant.PlantId,
          notes: dataPlant.notes,
          water_reminder: dataPlant.water_reminder,
          last_watering: new Date(),
          watered: true
        },
        headers: {
          token: result,
        },
      })
        .then(({ data }) => {
          console.log(data, 'data edit user plant ======');
          dispatch(fetchAllMyPlant());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};
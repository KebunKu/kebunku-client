import axios from 'axios';
import { fetchAllMyPlant } from './getUserPlant';
import { AsyncStorage } from 'react-native';

export const POST_USER_PLANT = 'POST_USER_PLANT';

export const postUserPlant = (dataPlant) => {
  console.log('masukkUserPlanttttttttttttttt');
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      axios({
        method: 'POST',
        url: 'http://192.168.0.111:3000/userplant',
        // mungkin nanti Object Plant keseluruhan ?
        data: {
          PlantId: dataPlant.PlantId,
          notes: dataPlant.notes,
          water_reminder: +dataPlant.reminder,
          planted_date: new Date(dataPlant.plantedDate),
          pupuk: dataPlant.pupuk,
        },
        headers: {
          token: result,
        },
      })
        .then(({ data }) => {
          console.log(data, 'data post user plant ======');
          dispatch(fetchAllMyPlant());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};

import axios from 'axios';
import { fetchAllFav } from './getAllFav'

export const POST_FAVORITE = 'POST_FAVORITE';

export const postFavorite = (UserId, PlantId) => {
  console.log('masukkkkkkkkkkPOST FAV')
  return (dispatch) => {
    axios
      .post('http://localhost:3000/userfav', {
        UserId,
        PlantId
      })
      .then(({ data }) => {
        dispatch(fetchAllFav())
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

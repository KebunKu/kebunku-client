import axios from 'axios';
import {fetchAllFav} from './getAllFav'

export const DELETE_FAV = 'DELETE_FAV';

export const deleteFavorite = (UserId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/userfav/${UserId}`)
      .then(({ data }) => {
        dispatch(fetchAllFav())
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

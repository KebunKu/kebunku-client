import axios from 'axios';

export const FETCH_All_FAV = 'FETCH_All_FAV';

export const fetchAllFav = () => {
  console.log('masukkkkkGET all FAV')
  return (dispatch) => {
    dispatch({
      type: FETCH_All_FAV,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    })
    axios
      .get('http://localhost:3000/userfav')
      .then(({ data }) => {
        dispatch({
          type: FETCH_All_FAV,
          payload: {
            data: data.Plants,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_FAV,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
  };
};

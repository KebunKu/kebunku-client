import axios from 'axios';

export const FETCH_All_PLANT = 'FETCH_All_PLANT';

export const fetchAllPlant = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_All_PLANT,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    });
    axios
      .get('http://localhost:3000/plants')
      .then(({ data }) => {
        dispatch({
          type: FETCH_All_PLANT,
          payload: {
            data,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_PLANT,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
  };
};
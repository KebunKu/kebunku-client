import axios from 'axios';

export const POST_FAVORITE = 'POST_FAVORITE';

export const postFavorite = (UserId, PlantId) => {
  console.log(UserId)
  console.log(PlantId)
  return (dispatch) => {
    axios
      .post('http://localhost:3000/userfav')
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

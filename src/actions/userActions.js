
import axios from 'axios'

export const GET_USERS_LIST = "GET_USERS_LIST"


const apikey = 'de5487672c8995e86e765fd7e93932fb65a8b'
const authAxios = axios.create({
  headers: {
    "x-apikey": apikey,
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"

  }
})


export const getUsersList = () => {
  return (dispatch) => {
    authAxios.get('https://products-40bc.restdb.io/rest/products') 
      .then(function (response) {
        console.log(response);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        // console.log(error);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}
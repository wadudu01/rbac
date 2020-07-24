import { GET_USERS_LIST } from "../actions/userActions";

let initialState = {
  title : "dew",
  getUsersList : false,
  errorUsersList: false 
} 

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage
      }
    default:
      return state
  }
}

export default users

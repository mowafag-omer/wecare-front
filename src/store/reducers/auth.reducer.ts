import { userStore } from "../types/"

// const initialState = token ? {isAuth: true, token} : {isAuth: false, token: null} 



const initialState = {
  token: null,
  isLogged: false
};



export default function authReducer(state: userStore = initialState, action: {type: string, payload: object | string | boolean}) {
  const {type, payload} = action;

  switch (type) {
    case "LOGIN":
      return {
          ...state,
          token: payload,
          isLogged: true
      }
    case "LOGOUT":
      return {
          token: null,
          isLogged: false
      }
    default:
      return state;
      break;
}
}
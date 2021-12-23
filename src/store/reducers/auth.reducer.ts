import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../types'
import {action} from "../types/type"

const token = localStorage.getItem("token") || null

const initialState = token ? {isAuth: true, token} : {isAuth: false, token: null} 

export default function authReducer(state = initialState, action: action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
    return {
      ...state,
      isAuth: false
    };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuth: false
      };
    case LOGIN_SUCCESS:
      return {
        token: action.payload,
        isAuth: true
      };
    case LOGIN_FAIL:
      return {
        token: null,
        isAuth: false
      };
    default:
      return state;
  }
}
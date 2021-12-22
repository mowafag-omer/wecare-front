import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../types'
import axios from 'axios'
import { config } from 'process'

const config = {headers: {'Content-Type': 'application/json'}}

type UserData ={
  email: String,
  password: String
}


export const register = () => (dispatch) => {
  axios.post('', { email , password } , config)
    .then(res => {
      dispatch({type: REGISTER_SUCCESS})
    })
    .catch(err => {
      dispatch({type: REGISTER_FAIL})
    })
}

const login = ()
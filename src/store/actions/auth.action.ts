import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../types'
import axios from 'axios'

const config = {headers: {'Content-Type': 'application/json'}}

type userData ={
  email: String,
  password: String
}


export const register = ({ email , password }: userData) => (dispatch: any) => {
  axios.post('', { email , password } , config)
    .then(res => {
      dispatch({type: REGISTER_SUCCESS})
    })
    .catch(err => {
      dispatch({type: REGISTER_FAIL})
    })
}
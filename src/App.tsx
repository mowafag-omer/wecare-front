import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import Router from './router';
import api from "./js/utils/api" 
import { login, logout } from './store/actions/auth.action';


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async () => {
      try {
        const axiosResponse = await api.get("/users/auth/refresh")
        console.log("axiosResponse refresh ===>",axiosResponse.status);
        const user: any = axiosResponse.headers.authorization.substring(7, axiosResponse.headers.authorization.length)

        dispatch(login(user))

      } catch (error) {
        console.log(error);
        dispatch(logout())
      }
  
    })()
  })

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;

import React from 'react'
import { useSelector } from 'react-redux'
import CreatePatientProfile from "../components/profiles/CreatePatientProfil";
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

const CreateProfile = () => {
  const authData = useSelector(state => state)
  console.log('authData', authData);
  
  return (
    <div>
      <Navbar/>
      <CreatePatientProfile />   
      <Footer />
    </div>
  )
}

export default CreateProfile
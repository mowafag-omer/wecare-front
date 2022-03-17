import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import GetAllUsers from '../components/GetAllUsers'





const HomePage = () => {
 

  return (
    <div>
      <Navbar/>

      <GetAllUsers />  
   
      <Footer />
    </div>
  )
}

export default HomePage

import './App.css'
import React from 'react';
import About from './Components/About'
import Appointment from './Components/Appointment'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import HomeForm from './Components/HomeForm'
import Navbar from './Components/Navbar'
import Offers from './Components/Offers.jsx'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Home/>
     <HomeForm/>
     <About/>
     <Appointment/>
     <Services/>
     <Offers/>
     <Testimonial/>
     <Footer/>
    
    </>
  )
}

export default App

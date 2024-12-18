
import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import Footer from './components/Footer.jsx'

function App() {

 

  return (
    
      
     <section>
       
       <Header/>
       <Navbar/>
       <Hero/>
       <Featured/>
       <Footer/>
   
     </section>
  )
}

export default App

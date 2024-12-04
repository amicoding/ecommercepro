import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
    
    <Header/>
    <Navbar/>
    
    </section>
  )
}

export default App

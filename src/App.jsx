import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Delivery from './Components/DeliveryService'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Home/> 
    <Services/>
    <About/>
    <Delivery/>
    </>
  )
}

export default App

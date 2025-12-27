import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Delivery from './Components/DeliveryService'
import Card from './Components/Cards'
import BBQ from './Components/BBQMenu'
import Choice from './Components/Choice'
import Testi from './Components/Testimonials'
import Video from './Components/Video'
import Blog from './Components/Blog'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Home/> 
    <Services/>
    <About/>
    <Delivery/>
    <Card/>
    <BBQ/>
    <Choice/>
   <Testi/>
    <Video/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App

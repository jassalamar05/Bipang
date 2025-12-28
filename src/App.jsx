import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Services from './Components/Services'
import About from './Components/About'
import Delivery from './Components/DeliveryService'
import Card from './Components/Cards'
import BBQ from './Components/BBQMenu'
import Choice from './Components/Choice'
import Testi from './Components/Testimonials'
import Video from './Components/Video'
import Blog from './Components/Blog'
import Data from './JS/Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homes from './Components/Home'
import Masters from './Master/Master'
import Head from './JS/Head'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Masters/>} >
      <Route path="/" element={<Homes/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
      <Route path="/bbq" element={<BBQ/>}></Route>
      <Route path="/choice" element={<Choice/>}></Route>
      <Route path="/testi" element={<Testi/>}></Route>
      <Route path="/delivery" element={<Delivery/>}></Route>
      <Route path="/video" element={<Video/>}></Route>    
      <Route path="/Blog" element={<Blog/>}></Route>   
      </Route>
      </Routes>
    </BrowserRouter>

    {/* <Data/> */}
    </>
  )
}

export default App

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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homes from './Components/Home'
import Masters from './Master/Master'
import Add from './Crud/Add'
import { Toaster } from 'react-hot-toast'
import Get from './Crud/Get'
import Update from './Crud/Update'
import Button from './Components/Button'
import Register from './Crud/Register'
import Login from './Crud/Login'
import ChotaHome from './Faltu/Home'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
 <Toaster position="top-right" toastOptions={{
    duration: 3000,
    style: { padding: "8px 16px",          // px-4 py-2
   borderRadius: "0.5rem",       // rounded-lg
      background: "#7c3aed",        // bg-purple-600  
      color: "#ffffff",             // text-white
      boxShadow: "0 0 10pxpx #a855f7",// shadow glow transition: "all 0.3s ease",  // transition
    },
    success: {
      style: {
        background: "#6d28d9",      // bg-purple-700 (hover feel)
      },
    },
  }}
/>

      <Routes>
      <Route path="/" element={<ChotaHome/>}></Route>
      <Route path="/log" element={<Login/>}></Route>    
      <Route path="/reg" element={<Register/>}></Route>




      <Route path="/" element={<Masters/>} >
      <Route path="/home" element={<Homes/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
      <Route path="/bbq" element={<BBQ/>}></Route>
      <Route path="/choice" element={<Choice/>}></Route>
      <Route path="/testi" element={<Testi/>}></Route>
      <Route path="/delivery" element={<Delivery/>}></Route>
      <Route path="/video" element={<Video/>}></Route>    
      <Route path="/Blog" element={<Blog/>}></Route>   
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/get" element={<Get/>}></Route>  
      <Route path="/update" element={<Update/>}></Route> 
      <Route path="/b" element={<Button/>}></Route> 
      </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

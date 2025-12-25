import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import Nav from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Nav/> */}
  
    <Header/> 
    <Home/> 
    <Services/>
    </>
  )
}

export default App

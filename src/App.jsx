import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <section>
          <div className='flex items-center justify-between  bg-cyan-800 max-h-20 rounded-b-xl'>

            <div className='flex items-center  md:gap-2'>
              <p className='text-white  text-xs  md:font-semibold'>GET IT ON:</p>
              <i className="fa-solid fa-play text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] rounded"></i>
              <i className="fa-brands fa-app-store-ios text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] rounded"></i>
            </div>

            <div className='text-wrap p-2'>
            <div className=' flex items-center gap-2'>
              <i className="fa-solid fa-location-dot text-yellow-500 text-xs"></i>
              <p className='text-white text-xs'>Neggepeng Village Gresik United</p>
            </div>

            <div className='  flex items-center text-sm'>
              <i className="fa-solid fa-clock text-xs text-yellow-500"></i>
              <p className='text-white text-xs'>All Day 08 : 00 AM - 08 : 00 PM</p>
            </div>
            </div>

          </div>
   </section>
    </>
  )
}

export default App

import { useState } from "react"

export default function Header(){
    const[isOpen,setIsOpen]=useState(false)
    const handlesubmit=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
           <section>
          <div className='flex items-center justify-between bg-cyan-800 lg:max-h-20 md:max-h-12 rounded-b-xl lg:mx-10 mx-1 max-h-10'>
            <div className='flex items-center gap-1 lg:gap-2'>
              <p className='text-white  text-[8px] text-wrap sm:text-[10px]  md:font-semibold'>GET IT ON:</p>
              <i className="fa-solid fa-play text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] text-[8px] rounded"></i>
              <i className="fa-brands fa-app-store-ios text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] text-[8px] rounded"></i>
            </div>

            <div className='md:flex items-center sm:flex sm:p-2 gap-10 md:p-4 text-wrap p-1'>
            <div className=' flex items-center gap-1'>
              <i className="fa-solid fa-location-dot text-yellow-500 text-[8px] md:text-xl"></i>
              <p className='text-white text-[8px] sm:text-[10px] md:text-sm'>Neggepeng Village Gresik United</p>
            </div>

            <div className='  flex items-center gap-2'>
              <i className="fa-solid fa-clock text-xs text-yellow-500 text-[8px] md:text-xl"></i>
              <p className='text-white text-[8px] sm:text-[10px] md:text-sm'>All Day 08 : 00 AM - 08 : 00 PM</p>
            </div>
            </div>
          </div>
   </section>



        <nav>
            <section className="flex items-center justify-between md:mx-10 md:mt-5 mt-3 lg:mx-10 lg:mt-5 mx-3">

                <div className="flex items-center">
                    <i className="fa-solid fa-fire text-2xl text-yellow-500 lg:text-3xl"></i>
                    <p className="lg:text-3xl text-2xl font-bold font-serif">Bipang</p>
                </div>

                <div className="hidden lg:flex items-center md:gap-20 list-none font-semibold text-sm ">
                    <li><a href="" className="text-yellow-500">HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">RESTURANT</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PAGES</a></li>
                </div>

                <div className="hidden lg:flex items-center gap-5">
                    <i className="fa-solid fa-phone text-xs text-yellow-500"> 123 456 789</i>
                    <button className="bg-yellow-500 px-5 py-2 rounded flex gap-3">
                        <i className="fa-solid fa-calendar text-xs text-white"></i>
                        <p className="text-white text-xs">RESERVATION</p>
                    </button>
                </div>

                <div className="block lg:hidden cursor-pointer">
                    <button onClick={handlesubmit}>
                    <i className="fa-solid fa-list text-yellow-500" ></i>
                    </button>
                </div>
                {/* drop down  */}

                {isOpen &&(
                 <div className=" lg:hidden mx-auto fixed inset-0 bg-white">
                   <div className="flex items-center justify-between bg-cyan-700 rounded-b-lg">
                    <div className="flex">
                    <i className="fa-solid fa-fire text-2xl text-yellow-500 "></i>
                    <p className=" text-2xl font-bold font-serif">Bipang</p>
                    </div>

                      <div className="flex cursor-pointer">
                    <button onClick={handlesubmit}>
                    <i class="fa-regular fa-circle-xmark text-yellow-500 text-xl animate-spin transition-transform"></i>
                    </button>
                </div>
                </div>
                  <div className="block gap-10 lg:hidden mt-6 p-4">
                <a href="" className="hover:text-yellow-500 hover:shadow-lg block p-2">HOME</a>
                <a href="" className="hover:text-yellow-500 hover:shadow-lg block p-2">ABOUT US</a>
                <a href="" className="hover:text-yellow-500 hover:shadow-lg block p-2">RESTURANT</a>
                <a href="" className="hover:text-yellow-500 hover:shadow-lg block p-2">SERVICES</a>
                <a href="" className="hover:text-yellow-500 hover:shadow-lg block p-2">PAGES</a>
                 </div>
                </div>
                )}
            </section>
        </nav>
        
        </>
    )
}
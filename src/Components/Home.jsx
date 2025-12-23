import { useState } from "react"

export default function Home(){


    const[isOpen,setIsOpen]=useState(false)
    const handlesubmit=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
        <nav>
            <section className="flex items-center justify-between md:mx-10 lg:mx-10 lg:mt-5 mx-3">

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
                 <div className=" lg:hidden fixed inset-0 bg-white mx-3">
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
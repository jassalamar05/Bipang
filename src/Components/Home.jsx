import { useState } from "react"
import icon from "../assets/img/Gemini_Generated_Image_h0q843h0q843h0q8.png";

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


        {/* new sectiion of image  */}
        <main>
            <section className="lg:grid grid-cols-2 md:block lg:px-20 lg:mt-10 px-5 max-h-screen">
                <div className=" col-span-1 ">
                    <div className="flex items-center lg:mt-10 lg:gap-10">
                    <div className="bg-cyan-700 h-1 w-20"></div>
                    <p className="lg:text-xs text-xs text-yellow-500 font-semibold">BBQ & GRILL RESTURANT</p>
                    </div>

                    <div className="mt-10">
                        <p className="lg:text-5xl text-2xl font-bold">EAT BBQ With On <span className="italic font-serif text-yellow-500">New</span> <br /><span className="italic font-serif text-yellow-500">Place</span> With Our <br />Resturant</p>
                    </div>

                    <div className="text-sm lg:mt-10 mt-2 leading-relaxed text-wrap text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus dolorem ipsum qui in dign voluptate. Cum temporibus minus vitae dolor molestiae eos repellendus officiis quam harum magni similique blanditiis deleniti, at voluptates corrupti voluptas itaque facere culpa labore. Sequi fugiat provident ducimus illo enim eius excepturi voluptatum aliquid.
                    </div>

                   
                        <div className="flex lg:mt-10 mt-4">
                        <div className="bg-yellow-500 h-22 w-2"></div>
                        <p className="mx-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque deserunt reprehenderit quae debitis ad quis cupiditate officia maiores accusantium dolores magni distinctio tenetur eligendi amet, quidem vero, in perferendis. <p className="mt-2 text-yellow-500 font-semibold text-sm">JOHN DOE</p>
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center lg:mt-5 mt-3 gap-10">
                            <i className="fa-solid fa-check text-yellow-500 text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div>

                         <div className="flex items-center  gap-10">
                            <i className="fa-solid fa-check text-yellow-500 text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div>

                         <div className="flex items-center gap-10">
                            <i className="fa-solid fa-check text-yellow-500 lg:text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-2 gap-5 lg:gap-10">
                        <input type="text" className=" px-5 lg:mt-5 lg:px-8 lg:py-3 border-[1px] border-gray-400 rounded-md" placeholder="Email Address" />
                        <button className="bg-blue-700 px-10 lg:px-8 lg:py-3 lg:mt-5 rounded-md text-white text-sm">GET VOUCHERS</button>
                    </div>


                    </div>


                {/* image  */}
                <div className=" mt-5 lg:col-span-1">
                   <img src={icon} alt="" className="bg-cove h-40 md:h-[200px] lg:h-[500px] w-full"/>

                    <div className="bg-cyan-800 lg:h-[25%] rounded-md">
                        <div className="p-2 lg:p-10">
                           <i className="fa-brands fa-google text-5xl text-yellow-500"></i>
                           <p className="text-white text-2xl font-bold">4.8 GOOGLE Reviews</p>
                           <p className="text-white pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, minima!</p>
                        </div>
                     </div>
                    </div>
            </section>
        </main>
        
        
        </>
    )
}
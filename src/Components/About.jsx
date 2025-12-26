import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"

export default function About(){
    return(
        <>
        <section >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-1 lg:px-10 lg:gap-10 md:px-3 md:gap-3 sm:px-2 py-3 md:py-5 sm;py-3 sm:gap-2 lg:py-10">

                <div className="col-span-1 relative">
                    <div>
                        <div className="bg-yellow-500 h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12 mt-1 lg:mt-0 absolute rotate-45 rounded-md lg:z-10"></div>
                        <div className="bg-cyan-700 h-5 w-5 sm:h-8 sm:w-8 sm:mt-5 lg:h-12 lg:w-12 mt-3 lg:mt-6 absolute rotate-45 rounded-md lg:z-10"></div>
                    </div>


                    <div className="lg:grid-cols-5 lg:grid lg:relative">
                    <img src={icon1} alt="" className=" mt-2 h-32 sm:h-[410px] lg:w-[80%] w-full object-cover rounded-md lg:absolute" />
                    
                    <div className="py-2 sm:py-0 lg:col-span-2 lg:col-start-4 lg:z-10">
                    <iframe
                            class="w-full h-32 sm:h-52 md:h-52 lg:h-80 rounded-xl object-cover lg:mt-72 "
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          >
                    </iframe>
                    </div>    
                </div>
                </div>

                {/* About us */}
                <div className="col-span-1">
                    <div className="flex items-center py-2 sm:py-3 md:py-5 md:gap-3">
                        <div className="bg-cyan-700 h-[2px] w-5 md:h-[3px] lg:w-20 md:w-8"></div>
                        <div className="text-yellow-600 text-sm sm:text-sm md:text-sm lg:text-base">ABOUT US</div>
                    </div>

                    {/* title */}
                    <div>
                        <p className="text-sm sm:text-xl sm:font-bold text-black font-semibold lg:text-5xl font-play lg:py-2">The Future BBQ <br /> Restaurant Solution</p>
                        <p className="text-xs sm:text-sm ms:text-sm sm:py-3 py-2 text-black text-wrap text-justify lg:py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non sed vitae neque, dolores consequatur reprehenderit doloribus laudantium repellendus quae similique, eum ducimus pariatur expedita ab. Inventore magni nesciunt excepturi?</p>
                    </div>

                    {/* tick text */}
                    <div className="lg:grid lg:grid-cols-2 lg:py-4">

                    <div>
                    <div className="flex items-center py-2 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">Family Place BBQ</p>
                    </div> 
                    </div>

                    <div className="flex items-center py-1 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">Family Place BBQ</p>
                    </div>


                     <div className="flex items-center py-2 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">BBQ Delivery Grill</p>
                    </div>


                     <div className="flex items-center py-1 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">BBQ Delivery GRILL</p>
                    </div>


                     <div className="flex items-center py-2 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">Private Table Restaurant</p>
                    </div>


                     <div className="flex items-center py-1 gap-4">
                        <i className="fa-solid fa-check text-yellow-400"></i>
                        <p className="text-gray-600 text-sm lg:text-base">Private Table Restaurant</p>
                    </div>
                 </div>
             {/* line */}
            <div className="bg-gray-400  h-[1px] w-full sm:mt-6 md:mt-7"></div>


            <div className=" lg:grid lg:grid-cols-3 lg:py-10 md:py-7 sm:py-5">

                <div className="flex items-center lg:block py-1">
                <div className="font-play text-xl sm:text-2xl text-yellow-500 font-semibold lg:text-5xl">25<sup className="text-black">+</sup></div>
                <div className="lg:text-black lg:font-bold font-play lg:py-3"><p>Branch Place</p></div>
                <div className=""><p>Lorem ipson door</p></div>
                </div>
                   
                <div className="flex items-center lg:block py-1">
                <div className="font-play text-xl sm:text-2xl text-yellow-500 font-semibold  lg:text-5xl">136<sup className="text-black">+</sup></div>
                <div className=" lg:text-black lg:font-bold font-play lg:py-3"><p>Grill Tools</p></div>
                <div className=""><p>Lorem ipson door</p></div>
                </div>
              
                <div className="flex items-center lg:block py-1">
                <div className="font-play text-xl sm:text-2xl text-yellow-500 font-semibold lg:text-5xl">25K<sup className="text-black">+</sup></div>
                <div className="lg:text-black lg:font-bold font-play lg:py-3"><p>Daily Customers</p></div>
                <div className=""><p>Lorem ipson door</p></div>
                </div>
            </div>
            </div> 
        </div>
    </section>
        </>
    )
}
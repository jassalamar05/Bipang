import icon from "../assets/img/banner1920x980.jpg"
import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"
import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"

export default function BBQ(){
    return(
        <>
         <main className="mt-24 px-5 sm:pt-10 sm:px-10 md:px-12 md:mt-44 lg:mt-20 sm:flex-col sm:justify-center md:flex">
                    <section>
                    <div className=" px-5 lg:px-52  relative">
                        <div className="flex justify-end mt-1 lg:mt-2">
                            <div className="bg-yellow-500 lg:h-8 lg:w-8 h-6 w-6 md:h-6 md:w-6 absolute rotate-45 rounded-md"></div>
                            <div className="bg-cyan-700 lg:h-8 lg:w-8  h-6 w-6 md:h-6 md:w-6 absolute lg:mt-5 mt-2 rounded-md rotate-45"></div>
                        </div>
        
                        <p className="lg:text-3xl text-2xl font-bold font-play sm:text-center md:text-center  lg:mt-5 text-wrap">Popular BBQ Menu</p>
                        <p className="md:text-center md:text-sm md:px-10 lg:py-5 text-wrap text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit?. </p>
                    </div>
                </section>
              
                {/* cards */}
                <section className=" grid grid-cols-1 lg:grid-cols-3">
                    {/* card1 */}
                    <div className="flex mt-10 px-2">
                        <div className="bg-gray-200 h-full w-full rounded-md">
                            <p className="text-center py-2 text-xs text-yellow-500">BBQ GRILL</p>
                            <p className="text-base lg:text-xl font-play font-bold text-center">Family BBQ Reservations</p>
                            <p className="text-xs text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>

                            {/* buttoms 4 */}
                            <div className="flex gap-2 justify-center py-4">
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>                                  
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                            </div>

                            <div className="flex justify-center gap-4 ">
                                <p className="font-play text-xl lg:text-2xl font-bold text-gray-700">$98</p>
                                <p className="font-play text-2xl lg:text-3xl font-bold text-cyan-800 ">$67</p>
                            </div>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center py-2 lg:py-5">
                            <button className="bg-yellow-500 flex items-center gap-2 p-2 lg:p-4 text-xs text-white rounded-md"><i className="fa-solid fa-mobile-button"></i>BUY ON APP</button>
                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                src={icon} className="w-96 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>


                  {/* card 2 */}
                    {/* card1 */}
                    <div className="flex mt-10 px-2">
                        <div className="bg-gray-200 h-full w-full rounded-md">
                            <p className="text-center py-2 text-xs text-yellow-500">BBQ GRILL</p>
                            <p className="text-base lg:text-xl font-play font-bold text-center">Family BBQ Reservations</p>
                            <p className="text-xs text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>

                            {/* buttoms 4 */}
                            <div className="flex gap-2 justify-center py-4">
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>                                  
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                            </div>

                            <div className="flex justify-center gap-4 ">
                                <p className="font-play text-xl lg:text-2xl font-bold text-gray-700">$98</p>
                                <p className="font-play text-2xl lg:text-3xl font-bold text-cyan-800 ">$67</p>
                            </div>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center py-2 lg:py-5">
                            <button className="bg-yellow-500 flex items-center gap-2 p-2 lg:p-4 text-xs text-white rounded-md"><i className="fa-solid fa-mobile-button"></i>BUY ON APP</button>
                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                src={icon1} className="w-96 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>

                  {/* card 3 */}
                    {/* card1 */}
                    <div className="flex mt-10 px-2">
                        <div className="bg-gray-200 h-full w-full rounded-md">
                            <p className="text-center py-2 text-xs text-yellow-500">BBQ GRILL</p>
                            <p className="text-base lg:text-xl font-play font-bold text-center">Family BBQ Reservations</p>
                            <p className="text-xs text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>

                            {/* buttoms 4 */}
                            <div className="flex gap-2 justify-center py-4">
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>                                  
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                                <div className="font-play text-white bg-cyan-900 py-1 px-2 lg:py-2 lg:px-4 rounded-md">30</div>
                            </div>

                            <div className="flex justify-center gap-4 ">
                                <p className="font-play text-xl lg:text-2xl font-bold text-gray-700">$98</p>
                                <p className="font-play text-2xl lg:text-3xl font-bold text-cyan-800 ">$67</p>
                            </div>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center py-2 lg:py-5">
                            <button className="bg-yellow-500 flex items-center gap-2 p-2 lg:p-4 text-xs text-white rounded-md"><i className="fa-solid fa-mobile-button"></i>BUY ON APP</button>
                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                src={icon2} className="w-96 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>
                </section>
               </main>

        
        </>
    )
}
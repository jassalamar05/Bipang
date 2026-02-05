import icon from "../assets/img/Gemini_Generated_Image_h0q843h0q843h0q8.png";
import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"
import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"


export default function Homes(){
    return(
        <>
        {/* new sectiion of image  */}
        <main className=" px-1 md:px-2  lg:px-3 lg:py-10">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-2 md:gap-1">
                {/* text area */}

                  <div className="lg:col-span-1 md:mt-0 lg:mt-0 lg:px-5"> 
                         {/* first text show kro  */}
                 <div>
                     <div className="flex items-center lg:mt-5 lg:gap-10 gap-5 py-4">
                    <div className="bg-cyan-700 h-1 lg:w-20 w-7"></div>
                    <p className="lg:text-xl text-xs text-yellow-500 font-semibold">BBQ & GRILL RESTURANT</p>
                    </div>

                    <div className="lg:py-0 mt-2">
                        <p className="lg:text-4xl md:text-3xl text-xl md:font-semibold lg:font-bold ">EAT BBQ With On <span className="italic font-serif text-yellow-500">New</span> <br /><span className="italic font-serif text-yellow-500">Place</span> With Our <br />Resturant</p>
                    </div> 

                    <div className="text-xs md:text-sm lg:text-sm  lg:mt-2 pt-3 lg:leading-relaxed text-justify text-wrap">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus dolorem ipsum qui
                         in dign voluptate. Cum temporibus minus vitae dolor molestiae eos
                    </div>  

                   
                     <div className="flex pt-4">
                        <div className="bg-yellow-500 lg:h-18 w-2 lg:h-22"></div>
                        <p className="mx-1 text-xs md:text-sm lg:text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque deserunt reprehenin perferendis. veniam eveniet impedit nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dol voluptatem facere excepturi! <p className="lg:py-4 text-yellow-500 font-semibold text-sm">JOHN DOE</p>
                        </p>
                    </div>  
                </div>

                    {/* anoterh */}
                    <div className="">
                          <div className="flex items-center   mt-3 gap-4 lg:gap-5">
                            <i className="fa-solid fa-check text-yellow-500 lg:text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div>

                         <div className="flex items-center gap-4 md:mt-0  mt-3 lg:gap-5">
                            <i className="fa-solid fa-check text-yellow-500 lg:text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div>

                         <div className="flex items-center gap-4 md:mt-0 mt-3 lg:gap-5">
                            <i className="fa-solid fa-check text-yellow-500 lg:text-xl"></i>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit?</p>
                        </div> 
                    

                    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-10 gap-4 mt-5 lg:mt-10">
                        <input type="text" className=" sm:col-span-2 md:col-span-2 border-[1px] border-gray-400 rounded-md p-[5px] lg:p-3 " placeholder="Email Address" />
                        <button className="bg-blue-700 sm:col-span-2 md:col-span-2  rounded-md text-white text-sm p-[10px]">GET VOUCHERS</button>
                    </div>
                    </div>  
             </div>

                {/* image  */}

                <div className=" mt-5 grid sm:col-span-1 md:col-span-1 lg:col-span-1 lg:mt-0 ">
                    <div
                    >
                   <img src={icon} alt="" className=" object-cover w-full h-52 sm:h-[300px] md:h-[430px] lg:h-[480px] rounded-md"/>
                    </div>

                    <div className="bg-cyan-800 rounded-md h-32 sm:h-28 md:h-36 lg:h-44">
                        <div className="p-2 lg:p-5">
                           <i className="fa-brands fa-google lg:text-5xl text-2xl  text-yellow-500"></i>
                           <p className="text-white lg:text-2xl text-xl font-bold">4.8 GOOGLE Reviews</p>
                           <p className="text-white lg:pt-5 pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, minima!</p>
                        </div>
                     </div>
                    </div>
            </section>
        </main>

        {/* services */}
                <main className="mt-5 md:mt-20 lg:mt-20 sm:flex-col sm:items-center sm:justify-center md:flex  ">
                    <section>
                    <div className="lg:px-80 px-5 md:px-60 relative">
                        <div className="flex justify-end mt-1 lg:mt-2">
                            <div className="bg-yellow-500 lg:h-8 lg:w-8 h-4 w-4 md:h-6 md:w-6 absolute rotate-45 rounded-md"></div>
                            <div className="bg-cyan-700 lg:h-8 lg:w-8  h-4 w-4 md:h-6 md:w-6 absolute lg:mt-5 mt-2 rounded-md rotate-45"></div>
                        </div>
        
                        <p className="lg:text-4xl text-2xl font-bold font-serif md:text-center lg:mt-5 text-wrap">Our Services</p>
                        <p className="md:text-center md:text-sm md:px-10 text-wrap text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit?. </p>
                    </div>
                </section>
              
                {/* cards */}
                <section className=" sm:grid sm:items-center sm:justify-center grid justify-center lg:flex gap-5 lg:justify-center lg:px-20 px-10">
                    {/* card1 */}
                    <div className="flex mt-10">
                            <img src={icon} alt="" className="h-32 w-32 rounded-md absolute ml-20"/>
                        <div className="bg-gray-200 h-72 w-72 mt-16 rounded-md">
                            <p className="text-xl pt-20 px-5 font-bold">Family BBQ Reservations</p>
                            <p className="text-xs px-10 text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center mt-10">
                            <button className="bg-yellow-600 p-2 text-white rounded-md">LEARN MORE</button>
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>
                  {/* card 2 */}
                     <div className="flex mt-10">
                            <img src={icon1} alt="" className="h-32 w-32 rounded-md absolute ml-20"/>
                        <div className="bg-gray-200 h-72 w-72 mt-16 rounded-md">
                            <p className="text-xl pt-20 px-5 font-bold"> BBQ Delivery Packages</p>
                            <p className="text-xs px-10 text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center mt-10">
                            <button className="bg-yellow-600 p-2 text-white rounded-md">LEARN MORE</button>
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>
                  {/* card3 */}
                     <div className="flex mt-10">
                            <img src={icon2} alt="" className="h-32 w-32 rounded-md absolute ml-20"/>
                        <div className="bg-gray-200 h-72 w-72 mt-16 rounded-md">
                            <p className="text-xl pt-20 px-5 font-bold text-center">BBQ Private Table</p>
                            <p className="text-xs px-10 text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
        
                            {/* BUTTON  */}
                            <div className="flex justify-center mt-10">
                            <button className="bg-yellow-600 p-2 text-white rounded-md">LEARN MORE</button>
                            </div>
                        </div>
                        <div>
                    </div>
                  </div>
                </section>
               </main>

                {/* About us */}
                 <section >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-1 lg:px-10 lg:gap-10 md:px-3 md:gap-3 sm:px-2 py-3 md:py-5 sm;py-3 sm:gap-2 lg:py-16">
                
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

                    {/* delivery services */}

                     <section>
            <div className="px-1 lg:px-0 md:px-0  lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">

                <div className="lg:col-span-1 lg:py-10 lg:px-20 md:px-10">
                    <div className="flex items-center gap-3 py-2">
                        <div className="bg-cyan-700 h-[2px] lg:w-20 w-5"></div> 
                        <p className="text-xs text-yellow-500 font-semibold font-play">DELIVERY GRILL SERVICE</p>
                    </div>

                    {/* Main */}
                    <div className="py-2">
                        <p className="font-play font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl">Keep  Stay We Deliver <br /> The Grill BBQ Tools</p>
                        <p className="text-xs sm:py-1 md:py-2 lg:py-4 font-play">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum mollitia fugit dolore, deserunt molestiae eligendi aspernatur perferendis assumenda alias ad sunt quidem tempore obcaecati modi quod molestias libero a sapiente!</p>
                    </div>

                    {/* cards */}
                    <div >
                        <div className="md:flex md:items-center pt-5 md:gap-3">
                        <div className="flex">
                        <i className="fa-solid fa-r flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 lg:h-10 lg:w-10 rounded-md text-white lg:text-xl"></i>
                        </div>

                        <div>
                        <p className="text-xs font-play font-bold lg:text-sm">Make a Reservation</p>
                        <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                        </div>
                        </div>

                        <div className="md:flex md:items-center pt-5  md:gap-3">
                        <div className="flex">
                        <i className="fa-solid fa-check flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 rounded-md text-white lg:h-10 lg:w-10 lg:text-xl"></i>
                        </div>

                        <div>
                        <p className="text-xs font-play font-bold lg:text-sm">Serving Food</p>
                        <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                        </div>
                        </div>

                        <div className="md:flex md:items-center pt-5  md:gap-3">
                        <div className="flex">
                        <i className="fa-solid fa-bell-concierge flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 rounded-md text-white lg:h-10 lg:w-10 lg:text-xl"></i>
                        </div>

                        <div>
                        <p className="text-xs font-play font-bold lg:text-sm">Make a Reservation</p>
                        <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.</p>
                        </div>
                        </div>
                    </div>

                    <div className="grid col-span-1 lg:grid-cols-2 py-3 lg:py-10"> 
                        <button className="bg-yellow-500 rounded flex items-center justify-center gap-3 py-2">
                        <i className="fa-solid fa-calendar text-xs text-white"></i>
                        <p className="text-white text-xs">RESERVATION</p>
                    </button>
                    <i className="fa-solid fa-phone text-base text-yellow-500 text-center"> 123 456 789</i>
                    </div>
                </div>


                <div className="col-span-1">
                     <iframe
                            class="w-full h-32 lg:h-[100%] md:h-[100%] rounded-xl object-cover "
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          >
                    </iframe>
                </div>
            </div>
        </section>

        {/* cards */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-3 px-1 py-2 sm:gap-2 mt-10 lg:px-20">
                      <div class=" w-full relative lg:col-span-1">
                                <img
                                    src={icon2}
                                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg absolute "
                                />
                            <div className="lg:px-5 md:px-3 sm:px-1">
                                <p class="flex mt-10 sm:pt-10 md:pt-28 lg:pt-52 lg:text-3xl text-white text-base font-play font-bold  absolute">
                                    West California <br /> Branch
                                </p>
        
                                <p className=" flex mt-24 sm:pt-10 md:pt-28 lg:pt-56  lg:text-sm text-gray-900 text-xs absolute">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.
                                </p>
        
                                <button className="pt-40 sm:pt-52 md:pt-64 lg:pt-96">
                                    <p className="bg-yellow-500 absolute rounded-md text-xs p-2 lg:px-8 lg:py-3 text-white">GET DIRECTION</p>
                                </button>
                            </div>
                        </div>
        
                        <div class=" w-full relative lg:col-span-1 pt-24 lg:pt-0 md:pt-0 sm:pt-0">
                                <img
                                    src={icon}
                                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg absolute "
                                />
                            <div className="lg:px-5 md:px-3 sm:px-1">
                                <p class="flex mt-10 sm:pt-10 md:pt-28 lg:pt-52 lg:text-3xl text-white text-base font-play font-bold  absolute">
                                    West California <br /> Branch
                                </p>
        
                                <p className=" flex mt-24 sm:pt-10 md:pt-28 lg:pt-56  lg:text-sm text-gray-900 text-xs absolute">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.
                                </p>
        
                                <button className="pt-40 sm:pt-52 md:pt-64 lg:pt-96">
                                    <p className="bg-yellow-500 absolute rounded-md text-xs p-2 lg:px-8 lg:py-3 text-white">GET DIRECTION</p>
                                </button>
                            </div>
                        </div>
                       
                        <div class=" w-full relative lg:col-span-1 pt-24 md:pt-0 lg:pt-0 sm:pt-0">
                                <img
                                    src={icon1}
                                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg absolute "
                                />
                            <div className="lg:px-5 md:px-3 sm:px-1">
                                <p class="flex mt-10 sm:pt-10 md:pt-28 lg:pt-52 lg:text-3xl text-white text-base font-play font-bold  absolute">
                                    West California <br /> Branch
                                </p>
        
                                <p className=" flex mt-24 sm:pt-10 md:pt-28 lg:pt-56  lg:text-sm text-gray-900 text-xs absolute">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.
                                </p>
        
                                <button className="pt-40 sm:pt-52 md:pt-64 lg:pt-96">
                                    <p className="bg-yellow-500 absolute rounded-md text-xs p-2 lg:px-8 lg:py-3 text-white">GET DIRECTION</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* BBq menu */}

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

    {/* Choice us */}


                    <section>
                        <div className="px-1 lg:px-0 md:px-0  lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:pt-20 pt-10">
                               
                        <div className="col-span-1">
                              <img
                                src={icon2}
                                  className="w-full h-[250px] sm:h-[200px] md:h-[550px] lg:h-[600px] object-cover rounded-lg "
                                       />
                                               </div>
                               
                        <div className="lg:col-span-1 lg:py-10 lg:px-10 md:px-5 md:pt-5">
                                                   <div className="flex items-center gap-3 py-2">
                                     <div className="bg-cyan-700 h-[2px] lg:w-20 w-5"></div> 
                                                       <p className="text-xs text-yellow-500 font-semibold font-play">WHY CHOICE US</p>
                             </div>
                
                                {/* Main */}
                               <div className="py-2">
                                                       <p className="font-play font-bold text-sm sm:text-2xl md:text-3xl lg:text-4xl">The Great Choicing BBQ <br />Restaurant</p>
                                               <p className="text-xs pt-1 sm:py-1 md:py-2 lg:py-4 font-play md:pt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum mollitia fugit dolore, deserunt molestiae eligendi aspernatur perferendis assumenda alias ad sunt quidem tempore obcaecati modi quod molestias libero a sapiente!</p>
                               </div>
                               
                                                   {/* cards */}
                                   <div className="md:pt-3" >
                                                       <div className="md:flex  md:items-center pt-5 md:gap-3">
                                                       <div className="flex">
                                                       <i className="fa-regular fa-gem flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 lg:h-10 lg:w-10 rounded-md text-white lg:text-xl"></i>
                                                       </div>
                                                       <div>
                                                       <p className="text-xs font-play font-bold lg:text-sm">Premium Service</p>
                                                       <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                                                       </div>
                                                       </div>
                                                       <div className="md:flex md:items-center pt-5  md:gap-3">
                                                       <div className="flex">
                                                       <i className="fa-solid fa-burger flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 rounded-md text-white lg:h-10 lg:w-10 lg:text-xl"></i>
                                </div>
                               
                                 <div>
                                                       <p className="text-xs font-play font-bold lg:text-sm">Good Food Materials</p>
                                                       <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem</p>
                                                       </div>
                                 </div>
                               
                                                       <div className="md:flex md:items-center pt-5  md:gap-3">
                                                       <div className="flex">
                                                       <i className="fa-solid fa-hand-sparkles flex items-center justify-center text-sm bg-yellow-500 h-5 w-5 rounded-md text-white lg:h-10 lg:w-10 lg:text-xl"></i>
                                                       </div>
                               
                                                       <div>
                                                       <p className="text-xs font-play font-bold lg:text-sm">Make a Reservation</p>
                                                       <p className="text-xs lg:py-[3px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.</p>
                                                       </div>
                                                       </div>
                                                   </div>
                               
                                                   <div className="mt-5 grid relative col-span-1 lg:py-10 md:pt-5 "> 
                                                       <div>
                                                       <button className="bg-gray-500 rounded flex items-center justify-center py-3 lg:py-4 w-[100%] absolute "> </button>
                                                       <button className="bg-yellow-500  rounded flex items-center justify-between  py-3 w-[98%] h-5 absolute px-3 font-bold  text-white lg:p-4">Fresh Food
                                                           <p className="flex items-center">99%</p>
                                                       </button>
                                                       </div>
                               
                                                       <div>
                                                        <button className="bg-gray-500 rounded flex items-center justify-center py-3 lg:py-4 w-[100%] absolute h-5 mt-10 lg:mt-14"> </button>
                                                       <button className="bg-yellow-500  rounded flex items-center justify-between lg:mt-14 py-3 w-[95%] lg:py-4 h-5 absolute px-3 font-bold text-white mt-10">Fresh Food
                                                           <p className="flex items-center">96%</p>
                                                       </button>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </section>
                           
                                       

                                       {/* testimonials */}
        <section>
        <div className="md:grid grid-cols-3 md:gap-3 pt-24 lg:px-20 md:px-14 px-1">
            <div>
            <div className=" items-center">
                <div className="flex items-center gap-3 lg:gap-6">
                <p className="bg-cyan-700 h-[2px] w-10"></p>
                <p className="text-yellow-500 text-sm">TESTIMONIAL</p>
                </div>
            </div>

            <div className="lg:pt-5">
                <p className="font-play font-semibold text-sm lg:text-4xl lg:font-bold md:text-2xl md:pt-5">Our Customers <br />Feedback</p>
                <p className="text-xs lg:pt-10 lg:text-sm pt-5 md:text-sm md:pt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, assumenda Lorem ipsum dolor </p>
            </div>
            </div>

            <div>
                <div className="bg-gray-200 w-full md:h-48 lg:h-56 mt-5">
                    <p className="text-xs lg:text-sm italic lg:p-6 md:text-sm md:p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium odit fuga veniam tempore numquam!</p>
                    <div className="flex items-center gap-3 mt-4 lg:px-6 md:px-3">
                        <div className="bg-yellow-500 h-10 w-10 rounded-md"></div>
                        <div className="flex-col">
                            <div className="text-sm">John Dee</div>
                            <div className="text-yellow-500 text-xs">CEO</div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className="bg-gray-200 w-full md:h-48 lg:h-56 mt-5">
                    <p className="text-xs md:text-sm lg:p-6 italic md:p-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium odit fuga veniam tempore numquam!</p>
                    <div className="flex items-center gap-3 mt-4 lg:px-6 md:px-3">
                        <div className="bg-black h-10 w-10 rounded-md"></div>
                        <div className="flex-col">
                            <div className="text-sm">John Dee</div>
                            <div className="text-yellow-500 text-xs">CEO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>


        {/* Our blogs */}


         <section>
                <div className="md:grid grid-cols-2 pt-10 lg:px-20 md:px-10 px-1 sm:px-4">
                    <div>
                    <div className=" items-center">
                        <div className="flex items-center gap-3 lg:gap-6">
                        <p className="bg-cyan-700 h-[2px] w-10"></p>
                        <p className="text-yellow-500 text-sm">Our Blog</p>
                        </div>
                    </div>
        
                    <div className="lg:pt-3">
                        <p className="font-play font-semibold text-sm lg:text-4xl lg:font-bold md:text-2xl md:pt-5 sm:text-xl sm:pt-3 pt-2">Read Our Blog</p>
                    </div>
                    </div>
        
                    <div>
                        <div className=" w-full pt-4">
                            <p className="text-xs lg:text-sm italic  md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium odit fuga veniam tempore numquam!</p>
                            <div className="flex items-center md:pt-3 lg:pt-4 pt-5">
                            <button className="bg-yellow-500 text-white rounded text-xs lg:px-3 md:p-1"> SEE ALL BLOG</button>
                            </div> 
                        </div>
                    </div>
                </div>
                </section>
        
        {/* cards */}
                <section className=" md:grid grid-cols-3 pt-2 md:pt-10 lg:pt-14 md:px-5 md:gap-3 px-1">
                    <div className="pt-2">
                    <div>
                    <img src={icon2} className="w-full h-[250px] sm:h-[200px] md:h-[270px] lg:h-[400px] object-cover rounded-l" />
                    <p className="text-sm font-play pt-2">The Happy Family BBQ</p>
        
                    <div className="flex items-center text-xs pt-2 gap-5">
                        <div className="flex items-center gap-1">
                        <i className="fa-solid fa-calendar text-gray-500"></i>
                        <p className="text-gray-500"> March 7,2022</p>
                        </div>
                      
                        <div className="flex items-center gap-1">
                        <i class="fa-solid fa-comment text-gray-500"></i>
                        <p className="text-gray-500">0 Comments</p>
                        </div> 
                    </div>
        
        
                    <div className="pt-3">
                        <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, tempore corrupti dolorem aspernatur culpa deserunt! Similique tempore mollitia soluta temporibus.</p>
                    </div>
        
                    <div className="mt-4 flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right-from-bracket text-yellow-500"></i>
                        <p className="text-xs text-yellow-500">READ MORE</p>
                    </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div className="pt-2">
        
                    <div>
                    <img src={icon1} className="w-full h-[250px] sm:h-[200px] md:h-[270px] lg:h-[400px] object-cover rounded-l" />
                    <p className="text-sm font-play pt-2">The Happy Family BBQ</p>
        
                    <div className="flex items-center text-xs pt-2 gap-5">
                        <div className="flex items-center gap-1">
                        <i className="fa-solid fa-calendar text-gray-500"></i>
                        <p className="text-gray-500"> March 7,2022</p>
                        </div>
                      
                        <div className="flex items-center gap-1">
                        <i class="fa-solid fa-comment text-gray-500"></i>
                        <p className="text-gray-500">0 Comments</p>
                        </div> 
                    </div>
        
        
                    <div className="pt-3">
                        <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, tempore corrupti dolorem aspernatur culpa deserunt! Similique tempore mollitia soluta temporibus.</p>
                    </div>
        
                    <div className="mt-4 flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right-from-bracket text-yellow-500"></i>
                        <p className="text-xs text-yellow-500">READ MORE</p>
                    </div>
                    </div>
                    </div>
        
                    {/* cards 3 */}
                <div>      
        
                    <div className="pt-2">
                    <div className="md:flex">
                    <img src={icon2} className="w-full md:w-fit h-[250px] md:h-[120px] lg:h-[150px] object-cover " />
                    
        
                    <div className=" text-xs">
                        <p className="text-sm font-play pt-2 lg:pt-10 lg:text-base lg:font-bold">Last Year Big Sale</p>
        
                        <div className="flex items-center gap-1 lg:gap-3 lg:pt-2">
                        <i className="fa-solid fa-calendar text-gray-500"></i>
                        <p className="text-gray-500 pt-2 lg:pt-0"> March 7,2022</p>
                        </div>
        
                        
                    <div className="mt-4 flex lg:items-center gap-1 lg:gap-3">
                        <i className="fa-solid fa-arrow-right-from-bracket text-yellow-500 lg:text-sm"></i>
                        <p className="text-xs text-yellow-500 lg:text-xs">READ MORE</p>
                    </div>  
                    </div>
                </div>
            </div>     
        
                    <div className="pt-2">
                    <div className="md:flex">
                    <img src={icon2} className="w-full md:w-fit h-[250px] md:h-[120px] lg:h-[150px] object-cover " />
                    
        
                    <div className=" text-xs">
                        <p className="text-sm font-play pt-2 lg:pt-10 lg:text-base lg:font-bold">Last Year Big Sale</p>
        
                        <div className="flex items-center gap-1 lg:gap-3 lg:pt-2">
                        <i className="fa-solid fa-calendar text-gray-500"></i>
                        <p className="text-gray-500 pt-2 lg:pt-0"> March 7,2022</p>
                        </div>
        
                        
                    <div className="mt-4 flex lg:items-center gap-1 lg:gap-3">
                        <i className="fa-solid fa-arrow-right-from-bracket text-yellow-500 lg:text-sm"></i>
                        <p className="text-xs text-yellow-500 lg:text-xs">READ MORE</p>
                    </div>  
                    </div>
                </div>
            </div>
        
              
                     
                    
                    <div className="pt-2">
                    <div className="md:flex">
                    <img src={icon2} className="w-full md:w-fit h-[250px] md:h-[120px] lg:h-[150px] object-cover " />
                    
        
                    <div className=" text-xs">
                        <p className="text-sm font-play pt-2 lg:pt-10 lg:text-base lg:font-bold">Last Year Big Sale</p>
        
                        <div className="flex items-center gap-1 lg:gap-3 lg:pt-2">
                        <i className="fa-solid fa-calendar text-gray-500"></i>
                        <p className="text-gray-500 pt-2 lg:pt-0"> March 7,2022</p>
                        </div>
        
                        
                    <div className="mt-4 flex lg:items-center gap-1 lg:gap-3">
                        <i className="fa-solid fa-arrow-right-from-bracket text-yellow-500 lg:text-sm"></i>
                        <p className="text-xs text-yellow-500 lg:text-xs">READ MORE</p>
                    </div>  
                    </div>
                </div>
            </div>
        
        
        
                </div>
                </section>
                        
        
        </>
    )
}
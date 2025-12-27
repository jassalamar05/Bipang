import icon from "../assets/img/banner1920x980.jpg"
import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"
import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"

export default function Blog(){
    return (
        <>
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
        <section className=" md:grid grid-cols-3 pt-2 md:pt-10 lg:pt-14 md:px-5 md:gap-3">
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
import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"
import icon from "../assets/img/banner1920x980.jpg"
import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"

export default function Card(){
    return(
        <>
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
        
        
        </>
    )
}
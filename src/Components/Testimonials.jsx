export default function Testi(){
    return (
        <>
        <section>
        <div className="md:grid grid-cols-3 md:gap-3 pt-10 lg:px-20 md:px-14">
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
        
        
        
        </>
    )
}
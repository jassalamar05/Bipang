import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"

export default function Choice(){
    return (
        <>
        <section>
            <div className="px-1 lg:px-0 md:px-0  lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:pt-20">

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
        
        
        </>
    )
}
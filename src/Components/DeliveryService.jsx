export default function Delivery(){
    return (
        <>
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
        
        
        </>
    )
}
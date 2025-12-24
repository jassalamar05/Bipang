import icon from "../assets/img/banner1920x980.jpg"
import icon1 from"../assets/img/scozsauwu9qk92iwe1pt.avif"
import icon2 from "../assets/img/the-8-seater-barbecue-table_400x333.jpg"
export default function Services(){

    return(
        <>
        <main className="mt-96 sm:mt-28 lg:mt-20 md:mt-40">
        <section>
            <div className="lg:px-96 px-10 md:px-60 relative">
                <div className="flex justify-end mt-1 lg:mt-2">
                    <div className="bg-yellow-500 lg:h-8 lg:w-8 h-4 w-4 md:h-6 md:w-6 absolute rotate-45 rounded-md"></div>
                    <div className="bg-cyan-700 lg:h-8 lg:w-8  h-4 w-4 md:h-6 md:w-6 absolute lg:mt-5 mt-2 rounded-md rotate-45"></div>
                </div>

                <p className="lg:text-4xl text-2xl font-bold font-serif lg:mt-5 text-wrap">Our Services</p>
                <p className="md:text-center md:text-sm md:px-10 text-wrap text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit?. </p>
            </div>
        </section>
      
        {/* cards */}
        <section className="lg:flex gap-5 lg:justify-center lg:px-20 px-10">
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
        </>
    )
}
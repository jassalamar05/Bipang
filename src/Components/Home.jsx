import icon from "../assets/img/Gemini_Generated_Image_h0q843h0q843h0q8.png";

export default function Home(){
    return(
        <>
        {/* new sectiion of image  */}
        <main>
            <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-3 lg:px-10">
                {/* text area */}

                  <div className="lg:col-span-1 md:mt-5 lg:px-5"> 
                         {/* first text show kro  */}
                 <div className="">
                     <div className="flex items-center lg:mt-10 lg:gap-10 gap-5 mt-4">
                    <div className="bg-cyan-700 h-1 lg:w-20 w-7"></div>
                    <p className="lg:text-xl text-xs text-yellow-500 font-semibold">BBQ & GRILL RESTURANT</p>
                    </div>

                    <div className="lg:mt-6 mt-2">
                        <p className="lg:text-4xl md:text-3xl text-xl md:font-semibold lg:font-bold ">EAT BBQ With On <span className="italic font-serif text-yellow-500">New</span> <br /><span className="italic font-serif text-yellow-500">Place</span> With Our <br />Resturant</p>
                    </div> 

                    <div className="text-xs md:text-sm lg:text-sm   lg:mt-10 mt-2 lg:leading-relaxed text-wrap">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus dolorem ipsum qui
                         in dign voluptate. Cum temporibus minus vitae dolor molestiae eos repellendus officiis quam harum magni similiqu
                         e blanditiis deleniti, at voluptates corrupti ucimus illo enim eius excepturi voluptatum aliquid.
                    </div>  

                   
                     <div className="flex lg:py-3 mt-2">
                        <div className="bg-yellow-500 h-18 w-2 lg:h-22"></div>
                        <p className="mx-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque deserunt reprehenderit quae debitis ad quis cupiditate officia maiores accusantium dolores magni distinctio tenetur eligendi amet, quidem vero, in perferendis. <p className="mt-2 text-yellow-500 font-semibold text-sm">JOHN DOE</p>
                        </p>
                    </div>  
            </div>

                    {/* anoterh */}
                    <div className="mt-5">
                          <div className="flex items-center md:mt-0  mt-3 gap-4 lg:gap-5">
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

                <div className=" mt-5 grid sm:col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="">
                   <img src={icon} alt="" className=" object-cover w-full h-52 sm:h-[300px] md:h-[500px] lg:h-[600px] rounded-md"/>
                    </div>

                    <div className="bg-cyan-800 rounded-md h-32 sm:h-28 md:h-36 lg:h-40">
                        <div className="p-2 lg:p-5">
                           <i className="fa-brands fa-google lg:text-5xl text-2xl  text-yellow-500"></i>
                           <p className="text-white lg:text-2xl text-xl font-bold">4.8 GOOGLE Reviews</p>
                           <p className="text-white lg:pt-5 pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, minima!</p>
                        </div>
                     </div>
                    </div>
            </section>
        </main>
        
        
        </>
    )
}
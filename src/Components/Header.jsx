export default function Header(){
    return(
        <>
           <section>
          <div className='flex items-center justify-between bg-cyan-800 max-h-20 rounded-b-xl md:mx-10 mx-3'>
            <div className='flex items-center gap-2  md:gap-2'>
              <p className='text-white  text-xs  md:font-semibold'>GET IT ON:</p>
              <i className="fa-solid fa-play text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] rounded"></i>
              <i className="fa-brands fa-app-store-ios text-white bg-yellow-500 p-1 md:px-[10px] md:py-[8px] rounded"></i>
            </div>

            <div className=' md:flex items-center gap-10 md:p-4 text-wrap p-2'>

            <div className=' flex items-center gap-2'>
              <i className="fa-solid fa-location-dot text-yellow-500 text-xs md:text-xl"></i>
              <p className='text-white text-xs md:text-sm'>Neggepeng Village Gresik United</p>
            </div>

            <div className='  flex items-center gap-2'>
              <i className="fa-solid fa-clock text-xs text-yellow-500 md:text-xl"></i>
              <p className='text-white text-xs md:text-sm'>All Day 08 : 00 AM - 08 : 00 PM</p>
            </div>
            </div>
          </div>
   </section>
        
        </>
    )
}
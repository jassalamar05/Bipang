import { MdEmail, MdPhone } from "react-icons/md"
import icon from "../assets/img/albert-YYZU0Lo1uXE-unsplash.jpg"
import { Link } from "react-router-dom"

export default function ChotaHome() {
  return (
    <>
<section className="w-full relative">

  {/* IMAGE */}
  <img
    src={icon}
    alt="fitness"
    className="w-full h-[650px] sm:h-[650px] md:h-[650px] lg:h-screen object-cover opacity-70"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* HEADER INSIDE IMAGE */}
  <header className="absolute top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="lg:w-9 lg:h-9 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
          🔥
        </div>
        <h1 className="text-xl font-bold tracking-wide text-white">
          Bipang
        </h1>
      </div>

      {/* AUTH BUTTONS – UNCHANGED */}
      <div className="flex items-center gap-2 sm:gap-4">

    <Link to="/log">
       <button className="
          lg:px-3 sm:px-4 lg:py-2 px-1 py-1 rounded-lg text-black font-semibold
          bg-yellow-400 hover:bg-cyan-300
          shadow-[0_0_15px_#22d3ee]
          transition hover:rounded-3xl
        ">
          Login
        </button>
    </Link>

          <Link to="/reg">
       <button className="
          lg:px-3 sm:px-4 lg:py-2 px-1 py-1 rounded-lg text-black font-semibold
          bg-cyan-400 hover:bg-yellow-300
          shadow-[0_0_15px_#22d3ee]
          transition hover:rounded-3xl
        ">
          Register
        </button>
    </Link>

      </div>
    </div>
  </header>

  {/* CENTER TEXT – SAME AS BEFORE */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_#facc15]">
      Ignite Your Taste 🔥
    </h1>

    <p className="mt-4 max-w-xl text-white text-sm sm:text-base md:text-lg">
      Experience premium BBQ & grill with bold flavors and fiery vibes
    </p>
  </div>

</section>

{/* FOOTER */}
<footer className="relative bg-cyan-700 text-black h-auto ">

  {/* SOFT OVERLAY (opacity control) */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

<div className="lg:pl-96 md:">
  <div className="
    relative z-10
    max-w-7xl mx-auto px-6 py-8
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
    text-center sm:text-left
  ">

    {/* BRAND */}
    <div>
      <h2 className="
        text-base font-semibold
        drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]
      ">
        Bipang
      </h2>
      <p className="text-sm mt-2 opacity-90">
        Premium BBQ & Grill restaurant with a modern dining experience.
      </p>
    </div>

 

    {/* CONTACT */}
    <div>
      <h3 className="
        text-sm font-semibold mb-2
        drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]
      ">
        Contact
      </h3>

      <div className="space-y-1 text-sm opacity-90">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <MdEmail /> info@bipangbbq.com
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <MdPhone /> +62 123 456 789
        </div>
      </div>
    </div>
  </div>
</div>

  {/* BOTTOM BAR */}
  <div className="
    relative z-10
    border-t border-cyan-800
    py-3 text-center text-xs
    opacity-80
  ">
    © 2026 Bipang BBQ & Grill
  </div>

</footer>

    </>
  )
}

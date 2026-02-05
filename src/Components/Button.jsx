export default function Button(){
    return(
        <>
        <div className=" border border-purple-500/60 rounded-xl
                transition-all duration-1000
                hover:shadow-[0_0_50px_#a855f7]">
                    hnji
                </div>

<br />
<br />
<div className="
 border border-voilet-400 rounded-xl p-2
  shadow-[0_0_50px_#22d3ee]
">
</div>





<div
  id="neon-panel"
  className="
    flex items-center justify-between gap-4
    p-4 rounded-xl
    border border-cyan-400
    shadow-[0_0_25px_#22d3ee]
    transition-all duration-300
    hover:shadow-[0_0_30px_#22d3ee]
  "
>
  {/* Left side (Text / Input area) */}
  <div className="flex-1">
    <p className="text-lg font-medium text-white">
      Sample Item Name
    </p>
  </div>

  {/* Right side (Action buttons) */}
  <div className="flex gap-2">
    <button
      className="
        px-4 py-2 rounded-lg
        bg-purple-600 hover:bg-purple-700
        text-white font-semibold
        shadow-[0_0_15px_#a855f7]
        transition
      "
    >
      Edit
    </button>
  </div>
</div>

        </>
    )
}
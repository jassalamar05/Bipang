import { useState } from "react"
import toast from "react-hot-toast"

export default function Add() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  
  const API_URL = import.meta.env.VITE_API_URL

  const adding = async () => {
    if (!name.trim()) {
      setErr("Name is required")
      return
    }

    try {
      setLoading(true)
      setErr(null)

      const res = await fetch(`${API_URL}/api/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      })

      const result = await res.json()
      setData((prev) => [...prev, result.data])
      setName("")
      toast.success("Food added 🍔")
    } catch (error) {
      setErr("Something went wrong")
      toast.error("Add failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="lg:h-[500px] bg-gradient-to-r from-cyan-300 to-cyan-500 flex flex-col items-center justify-center">

      {/* PAGE TITLE */}
      <h1 className="
        text-4xl md:text-5xl font-extrabold mb-6
        font-play text-yellow-500
      ">
        ADD
      </h1>

      <div className="
          w-full max-w-md p-6 rounded-2xl
          bg-black/60 border border-purple-500/40
           shadow-[0_0_35px_#facc15]">
        <h2 className="text-2xl font-bold text-center mb-6 text-cyan-500">Add Food 🍽️</h2>
        {/* Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter food name"
          className="
            w-full px-4 py-3 mb-4 rounded-lg
            bg-black text-white
            border border-purple-400
             shadow-[0_0_35px_#facc15]
            focus:outline-none focus:ring-2 focus:ring-cyan-500
          "
        />

        {/* Button */}
        <button
          onClick={adding}
          disabled={loading}
          className="
            w-full px-4 py-3 rounded-lg font-semibold
            text-black bg-yellow-400
            hover:bg-cyan-500
            shadow-[0_0_20px_#22d3ee]
            transition hover:rounded-3xl
            disabled:opacity-40
          "
        >
          {loading ? "Adding..." : "Add Food"}
        </button>

        {/* Error */}
        {err && (
          <p className="text-center text-red-500 mt-4">
            {err}
          </p>
        )}
      </div>
    </section>
  )
}

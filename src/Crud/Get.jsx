import { useEffect, useState } from "react"

export default function Get() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    const getting = async () => {
      try {
        setLoading(true)
        setErr(null)

        const res = await fetch(`${API_URL}/api/get`)
        const result = await res.json()
        setData(result.data)
      } catch (error) {
        setErr("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    getting()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Food List 🍽️
        </h1>

        {/* States */}
        {loading && (
          <p className="text-center text-cyan-400 mb-4">
            Loading...
          </p>
        )}

        {err && (
          <p className="text-center text-red-500 mb-4">
            {err}
          </p>
        )}

        {!loading && data.length === 0 && (
          <p className="text-center text-gray-400">
            No food items found
          </p>
        )}

        {/* List */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={item._id || index}
              className="
                flex items-center justify-between
                p-4 rounded-xl
                bg-black/60 border border-purple-500/40
                text-white
                shadow-[0_0_18px_#a855f7]
                hover:shadow-[0_0_25px_#22d3ee]
                transition-all duration-300
              "
            >
              <span className="text-gray-400 font-medium">
                #{index + 1}
              </span>

              <span className="text-lg font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

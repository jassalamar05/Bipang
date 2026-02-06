import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [data, setData] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL

  const navigate=useNavigate()

  const login = async () => {
    if (!email || !password) {
      setErr("Email and password required")
      return
    }

    try {
      setLoading(true)
      setErr(null)

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message || "Login failed")
      }

      // success
      setData(result) // token / user
      navigate("/home")
      toast.success("login in")
   
      setEmail("")
      setPassword("")
    } catch (error) {
      setErr(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center p-6">
      <div
        className="
          w-full max-w-md p-6 rounded-2xl
          bg-black/60 border border-yellow-500/40
        shadow-[0_0_45px_#facc15]
        "
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login 🔐
        </h1>

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="
            w-full px-4 py-3 mb-4 rounded-lg
            bg-black text-white
            border border-yellow-700
            shadow-[0_0_15px_#22d3ee]
            focus:outline-none focus:ring-2 focus:ring-teal-500
          "
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="
            w-full px-4 py-3 mb-6 rounded-lg
            bg-black text-white
            border border-yellow-400
            shadow-[0_0_15px_#22d3ee]
            focus:outline-none focus:ring-2 focus:ring-teal-500
          "
        />

        {/* Button */}
        <button
          onClick={login}
          disabled={loading}
          className="
            w-full px-4 py-3 rounded-lg font-semibold
            text-black bg-yellow-400
            hover:bg-yellow-600
            shadow-[0_0_25px_#facc15]
            transition hover:rounded-3xl
            disabled:opacity-60
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Error */}
        {err && (
          <p className="text-center text-red-500 mt-4">
            {err}
          </p>
        )}

        {/* Success Preview */}
        {data && (
          <p className="text-center text-green-400 mt-4">
            Login successful ✅
          </p>
        )}

    <p
        onClick={() => navigate("/")}
        className="mt-4 text-center text-sm text-cyan-300 cursor-pointer hover:text-yellow-400 transition animate-pulse"
        >
        ← Back to Home
        </p>
      </div>
    </section>
  )
}

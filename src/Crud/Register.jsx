import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL

  const register = async () => {
    if (!name || !email || !phone || !address || !password || !confirmPassword) {
      setErr("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setErr("Passwords do not match")
      return
    }

    try {
      setLoading(true)
      setErr(null)

      const res = await fetch(`${API_URL}/auth/reg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          password,
        }),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.message || "Register failed")

      toast.success("Registered successfully 🎉")
      setName("")
      setEmail("")
      setPhone("")
      setAddress("")
      setPassword("")
      setConfirmPassword("")
      navigate("/log")
    } catch (error) {
      setErr(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-cyan-400 to-cyan-700 flex items-center justify-center p-6">
      <div
        className="
          w-full max-w-md p-6 rounded-2xl
          bg-black/60 border border-yellow-500/40
          shadow-[0_0_35px_#facc15]
        "
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Register 🔐
        </h1>

        {/* Full Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setErr(null) }}
          placeholder="Enter full name"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setErr(null) }}
          placeholder="Enter email"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Phone */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setErr(null) }}
          placeholder="Enter phone number"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Address */}
        <textarea
          value={address}
          onChange={(e) => { setAddress(e.target.value); setErr(null) }}
          placeholder="Enter address"
          rows="2"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setErr(null) }}
          placeholder="Enter password"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Confirm Password */}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value); setErr(null) }}
          placeholder="Confirm password"
          className="w-full px-4 py-3 mb-6 rounded-lg bg-black text-white border border-cyan-400 shadow-[0_0_15px_#22d3ee] focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Button */}
        <button
          onClick={register}
          disabled={loading}
          className="w-full px-4 py-3 rounded-lg font-semibold text-black bg-yellow-400 hover:bg-yellow-500 shadow-[0_0_25px_#facc15] transition hover:rounded-3xl disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Error */}
        {err && <p className="text-center text-red-500 mt-4">{err}</p>}

        {/* Back */}
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

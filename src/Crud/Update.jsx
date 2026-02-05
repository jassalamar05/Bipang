import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Update() {
  const [data, setData] = useState([])
  const [edit, setEdit] = useState(null)

  const[del,setDel]=useState(null)
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const getting = async () => {
      try {
        setLoading(true)
        setErr(null)

        const res = await fetch("http://localhost:5000/api/get")
        const result = await res.json()
        setData(result.data)
      } catch {
        setErr("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    getting()
  }, [])



  const update = async () => {
    try {
      setLoading(true)
      setErr(null)

      const up = await fetch(`http://localhost:5000/api/up/${edit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: edit.name }),
      })

      const result = await up.json()

      setData((prev) =>
        prev.map((item) =>
          item._id === edit._id ? result.data : item
        )
      )
    toast.success("Updated Successful")
    } catch {
      setErr("Update failed")
    } finally {
      setLoading(false)
      setEdit(null)
    }
  }


  const deleteItem =async(id)=>{
    try{
        setLoading(true)
        setErr(null)

    const res = await fetch(`http://localhost:5000/api/del/${id}`, {
      method: "DELETE",
    })
    
    const resl=await res.json()

    setData((prev)=>prev.filter((item)=>item._id !==id))
        toast.success("Deleted successfully 🗑️")
  } catch (error) {
    console.log(error)
    setErr("Delete failed")
    toast.error("Delete failed")
  } finally {
    setLoading(false)
  }
}


  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 flex justify-center">
      <div className="w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-center text-white mb-8">
         Update Food
        </h1>

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

        <div className="space-y-4">
          {data.map((item) => {
            const isEditing = edit?._id === item._id

            return (
              <div
                key={item._id}
                className={`
                  flex items-center justify-between gap-4 p-4 rounded-xl
                  bg-black/60 border
                  transition-all duration-300
                  ${
                    isEditing
                      ? "border-cyan-400 shadow-[0_0_20px_#22d3ee]"
                      : "border-purple-500/40 hover:shadow-[0_0_18px_#a855f7]"
                  }
                `}
              >
                {/* Name / Input */}
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={edit.name}
                      onChange={(e) =>
                        setEdit({
                          ...edit,
                          name: e.target.value,
                        })
                      }
                      className="
                        w-full px-4 py-2 rounded-lg
                        bg-black text-white
                        border border-cyan-400
                        shadow-[0_0_15px_#22d3ee]
                        focus:outline-none focus:ring-2 focus:ring-cyan-500
                      "
                    />
                  ) : (
                    <p className="text-lg font-medium text-white">
                      {item.name}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={update}
                        className="
                          px-4 py-2 rounded-lg text-black font-semibold
                          bg-cyan-400 hover:bg-cyan-300
                          shadow-[0_0_15px_#22d3ee]
                          transition  hover:rounded-2xl
                        "
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEdit(null)}
                        className="
                          px-4 py-2 rounded-lg text-white
                          bg-red-500 hover:bg-red-600
                          shadow-[0_0_15px_#ef4444]
                          transition  hover:rounded-2xl
                        "
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                           <button
                      onClick={() => setEdit({ ...item })}
                      className="
                        px-4 py-2 rounded-lg text-white
                        bg-purple-600 hover:bg-purple-700
                        shadow-[0_0_15px_#a855f7]
                        transition hover:rounded-2xl
                      "
                    >
                      Edit
                </button>
                    <button
                        onClick={() => deleteItem(item._id)}
                        className="
                        px-4 py-2 rounded-lg text-white
                        bg-red-600 hover:bg-red-700
                        shadow-[0_0_15px_#ef4444]
                        transition hover:rounded-2xl
                        "
                    >
                        Delete
                    </button>
                    </> 
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {data.length === 0 && !loading && (
          <p className="text-center text-gray-400 mt-8">
            No data found
          </p>
        )}
      </div>
    </section>
  )
}

import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if (res.ok) {
      return await res.json()
    } else {
      setError("ups, something went wrong")
    }
  }

  const isValid = () => {
    if (username === password) return true
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isValid()) {
      const data = await fetchUsers()
      const user = data.find((it) => it?.username === username)

      if (!user) {
        setError("cannot found username")
        return
      }
      const verifiedUser = {
        name: user?.name,
        email: user?.email,
        address: user?.address?.city,
        phone: user?.phone,
      }
      localStorage.setItem("user", JSON.stringify(verifiedUser))
      navigate("/dashboard")
    } else {
      setError("username and password did not match")
    }
  }

  useEffect(() => {
    if (!!error) {
      setTimeout(() => {
        setError("")
      }, 3000)
    }
  }, [error])

  return (
    <div className="max-w-xs mx-auto h-screen w-full flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold">Login Page</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mt-16 flex flex-col gap-y-8 w-full"
      >
        <input
          type="text"
          value={username}
          placeholder="username"
          className="border border-blue-400 focus:outline-1 focus:outline-blue-600 w-full max-w-xs rounded-full text-center py-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="border border-blue-400 focus:outline-1 focus:outline-blue-600 w-full max-w-xs rounded-full text-center py-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-2 bg-blue-500 max-w-xs rounded-full text-white font-medium hover:bg-blue-600">
          Login
        </button>
      </form>
      {!!error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Login

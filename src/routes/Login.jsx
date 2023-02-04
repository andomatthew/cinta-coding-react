import React from "react"

import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem("username", "Alex")
    navigate("/dashboard")
  }

  return (
    <div className="max-w-xs mx-auto h-screen w-full flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold">Login Page</h3>
      <form
        onSubmit={handleSubmit}
        className="mt-16 flex flex-col gap-y-8 w-full"
      >
        <input
          type="text"
          placeholder="username"
          className="border border-blue-400 focus:outline-1 focus:outline-blue-600 w-full max-w-xs rounded-full text-center py-2"
        />
        <input
          type="password"
          placeholder="password"
          className="border border-blue-400 focus:outline-1 focus:outline-blue-600 w-full max-w-xs rounded-full text-center py-2"
        />

        <button className="w-full py-2 bg-blue-500 max-w-xs rounded-full text-white font-medium hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login

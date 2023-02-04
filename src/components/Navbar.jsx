import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(localStorage.getItem("username"))
  const [showButton, setShowButton] = useState(false)

  const handleClick = () => {
    setShowButton(!showButton)
    navigate("/profile")
  }

  return (
    <nav className="flex justify-between items-center py-4">
      <h3 className="text-xl font-bold">Cinta Coding</h3>
      {!!user && <PostText />}
      {!!user ? <ButtonUser /> : <ButtonLogin />}
    </nav>
  )

  function ButtonLogin() {
    return (
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded-full font-medium"
      >
        Login
      </button>
    )
  }

  function ButtonUser() {
    return (
      <div className="relative">
        <button onClick={() => setShowButton(!showButton)}>
          <h3 className="text-xl font-bold">
            Welcome, <span className="text-blue-400">{user}</span>
          </h3>
        </button>
        {!!showButton && (
          <button
            onClick={handleClick}
            className="absolute -bottom-[50px] right-0 hover:bg-blue-400 hover:text-white border border-blue-400 py-2 px-4 rounded-md"
          >
            <p className="text-sm font-medium">Detail Profile</p>
          </button>
        )}
      </div>
    )
  }

  function PostText() {
    return (
      <div className="w-14 border-b-2 border-blue-400">
        <p className="text-center font-bold">Post</p>
      </div>
    )
  }
}

export default Navbar

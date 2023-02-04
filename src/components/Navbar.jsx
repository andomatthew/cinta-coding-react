import React from "react"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4">
      <h3 className="text-xl font-bold">Cinta Coding</h3>
      <button className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium">
        Login
      </button>
    </nav>
  )
}

export default Navbar

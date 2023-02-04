import { useState } from "react"

import Navbar from "./components/Navbar"
import Dashboard from "./routes/Dashboard"
import Detail from "./routes/Detail"
import Profile from "./routes/Profile"

import IllustrationLogin from "./assets/illustration/login.svg"

function App() {
  return (
    <>
      <Navbar />
      <img src={IllustrationLogin} alt="illustration" className="mx-auto" />
    </>
  )
}

export default App

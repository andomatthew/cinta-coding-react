import Navbar from "./components/Navbar"
import Dashboard from "./routes/Dashboard"
import Detail from "./routes/Detail"
import Profile from "./routes/Profile"
import Login from "./routes/Login"
import NoMatch from "./routes/NoMatch"
import Home from "./routes/Home"

import { Routes, Route, Outlet } from "react-router-dom"
import DataContext from "./context/DataContext"

function App() {
  return (
    <DataContext>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
          path="/"
        >
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </DataContext>
  )
}

export default App

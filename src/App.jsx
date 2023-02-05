import Navbar from "./components/Navbar"
import Dashboard from "./routes/Dashboard"
import Detail from "./routes/Detail"
import Profile from "./routes/Profile"
import Login from "./routes/Login"
import NoMatch from "./routes/NoMatch"
import Home from "./routes/Home"

import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import DataContext from "./context/DataContext"
import { useEffect } from "react"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("user")
    const privateRoutesPathname = ["/dashboard", "/profile", `/posts/${id}`]
    const publicRoutesPathname = ["/login", "/"]
    if (isLoggedIn) {
      publicRoutesPathname.forEach((route) => {
        if (location.pathname === route) navigate("/dashboard")
      })
    } else {
      privateRoutesPathname.forEach((route) => {
        if (location.pathname === route) {
          navigate("/login")
        }
      })
    }
  }, [location])

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

import React, { useState, useEffect, createContext } from "react"

export const DataContext = createContext()

const DataProvider = (props) => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if (res.ok) {
        const data = await res.json()
        setUsers(data)
      }
    }
    fetchUsers()
  }, [])

  return (
    <DataContext.Provider value={users}>{props.children}</DataContext.Provider>
  )
}

export default DataProvider

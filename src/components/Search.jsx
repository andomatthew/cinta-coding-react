import React from "react"
import { FaSearch } from "react-icons/fa"

const Search = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-slate-200 rounded-full text-center py-1"
      />
      <FaSearch className="absolute top-2 right-4 text-slate-400" />
    </div>
  )
}

export default Search

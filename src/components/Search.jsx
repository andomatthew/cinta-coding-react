import React from "react"
import { FaSearch } from "react-icons/fa"

const Search = ({ keyword = "", setKeyword }) => {
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div className="w-full relative">
      <input
        value={keyword}
        type="text"
        placeholder="Search"
        className="w-full bg-slate-200 rounded-full text-center py-1"
        onChange={(e) => onChangeKeyword(e)}
      />
      <FaSearch className="absolute top-2 right-4 text-slate-400" />
    </div>
  )
}

export default Search

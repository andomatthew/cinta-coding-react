import React from "react"

import Search from "../components/Search"
import Post from "../components/Post"

const Dashboard = () => {
  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <Search />
      <Post />
      <Post />
      <Post />
      {/* pagination */}
      <div className="w-full flex justify-end text-slate-400">
        <div className="flex gap-x-4">
          <p>prev</p>
          <p className="border-b-4 border-blue-400 cursor-pointer">1</p>
          <p>2</p>
          <p>3</p>
          <p>next</p>
        </div>
      </div>
      {/* pagination */}
    </div>
  )
}

export default Dashboard

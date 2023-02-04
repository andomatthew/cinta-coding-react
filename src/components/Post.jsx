import React from "react"

import { SlBubble } from "react-icons/sl"

import { useNavigate } from "react-router-dom"

const Post = () => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/posts/${id}`)
  }

  return (
    <div className="flex gap-x-4">
      <p className="font-bold">Name</p>
      <div>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          nesciunt ut nulla eveniet nam voluptate!
        </p>
        <div className="flex items-center mt-2 gap-x-8 cursor-pointer">
          <div
            onClick={() => handleClick("1")}
            className="flex items-center gap-x-2"
          >
            <SlBubble className="text-blue-300" />
            <p className="text-xs font-semibold text-blue-400">5</p>
          </div>
          <p
            onClick={() => handleClick("2")}
            className="text-xs font-semibold text-blue-400 cursor-pointer"
          >
            Detail
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post

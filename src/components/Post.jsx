import React, { useEffect, useState } from "react"

import { SlBubble } from "react-icons/sl"

import { useNavigate } from "react-router-dom"

const Post = ({ id, title, body, userName }) => {
  const navigate = useNavigate()

  const [comments, setComments] = useState([])

  const handleClick = (id) => {
    navigate(`/posts/${id}`)
  }

  const fetchTotalComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )

    if (res.ok) {
      const data = await res.json()
      setComments(data)
    }
  }

  useEffect(() => {
    fetchTotalComments()
  }, [])

  return (
    <div className="flex gap-x-4">
      <p className="font-bold">{userName || "Name"}</p>
      <div>
        <p className="text-slate-400">{title}</p>
        <div className="flex items-center mt-2 gap-x-8 cursor-pointer">
          <div
            onClick={() => handleClick("1")}
            className="flex items-center gap-x-2"
          >
            <SlBubble className="text-blue-300" />
            <p className="text-xs font-semibold text-blue-400">
              {comments.length}
            </p>
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

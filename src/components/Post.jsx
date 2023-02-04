import React, { useEffect, useState } from "react"

import { SlBubble } from "react-icons/sl"

import { useNavigate } from "react-router-dom"

const Post = ({ id, title, body, userName, isDetail = false }) => {
  const navigate = useNavigate()

  const [comments, setComments] = useState([])
  const [showCommets, setShowCommets] = useState(false)

  const handleClick = (id) => {
    !isDetail ? navigate(`/posts/${id}`) : setShowCommets(!showCommets)
  }
  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )

    if (res.ok) {
      const data = await res.json()
      setComments(data)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className={`flex gap-x-4`}>
      <p className="font-bold">{userName || "Name"}</p>
      <div>
        <p className="text-slate-500 font-medium">{title}</p>

        {!!isDetail && <p className="text-slate-400">{body}</p>}

        <div className="flex items-center mt-2 gap-x-8 cursor-pointer">
          {!showCommets && (
            <div
              onClick={() => handleClick(id)}
              className="flex items-center gap-x-2"
            >
              <SlBubble className="text-blue-300" />
              <p className="text-xs font-semibold text-blue-400">
                {comments.length}
              </p>
            </div>
          )}

          {!isDetail && (
            <p
              onClick={() => handleClick(id)}
              className="text-xs font-semibold text-blue-400 cursor-pointer"
            >
              Detail
            </p>
          )}
        </div>

        {showCommets && (
          <>
            <p
              onClick={() => setShowCommets(!showCommets)}
              className="font-bold mt-4 mb-4 cursor-pointer"
            >
              All Comments
            </p>
            {comments.map((comment) => (
              <div className="grid grid-cols-2 gap-4">
                <p className="font-bold">{comment.name}</p>
                <p className="text-slate-500 font-medium">{comment.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Post

import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi"

import Post from "../components/Post"
import { DataContext } from "../context/DataContext"

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const users = useContext(DataContext)

  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      if (res.ok) {
        const data = await res.json()
        setPost(data)
      }
    }
    fetchPost()
    setUser(users?.find((oneUser) => oneUser.id == post?.userId))
  }, [users, post])

  return (
    !!post && (
      <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
        <HiArrowLeft
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer"
        />
        <Post
          id={post.id}
          title={post.title}
          body={post.body}
          userName={user?.username}
          isDetail={true}
        />
      </div>
    )
  )
}

export default Detail

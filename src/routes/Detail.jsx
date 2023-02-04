import React from "react"

import Post from "../components/Post"

import { HiArrowLeft } from "react-icons/hi"

import { useNavigate } from "react-router-dom"

const Detail = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <HiArrowLeft
        onClick={() => navigate(-1)}
        className="text-2xl cursor-pointer"
      />
      <Post />
    </div>
  )
}

export default Detail

import React from "react"

import Post from "../components/Post"

import { HiArrowLeft } from "react-icons/hi"

const Detail = () => {
  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <HiArrowLeft className="text-2xl cursor-pointer" />
      <Post />
    </div>
  )
}

export default Detail

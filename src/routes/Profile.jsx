import React, { useState } from "react"

import { HiArrowLeft } from "react-icons/hi"

import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()

  const [user] = useState(JSON.parse(localStorage.getItem("user")))

  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <HiArrowLeft
        onClick={() => navigate(-1)}
        className="text-2xl cursor-pointer"
      />
      <div className="flex max-w-md gap-x-16 mx-auto">
        <div className="flex gap-y-8 flex-col">
          <div className="flex justify-between gap-x-4">
            <p>Username</p>
            <span>:</span>
          </div>
          <div className="flex justify-between gap-x-4">
            <p>Email</p>
            <span>:</span>
          </div>
          <div className="flex justify-between gap-x-4">
            <p>Address</p>
            <span>:</span>
          </div>
          <div className="flex justify-between gap-x-4">
            <p>Phone</p>
            <span>:</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user.address}</p>
          <p>{user?.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile

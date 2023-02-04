import React, { useContext, useEffect, useState } from "react"

import Search from "../components/Search"
import Post from "../components/Post"

import { DataContext } from "../context/DataContext"

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [showPosts, setShowPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState([])
  const [perPage, setPerPage] = useState(1)
  const users = useContext(DataContext)

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (res.ok) {
      const data = await res.json()
      setPosts(data)
    }
  }

  const initPagination = () => {
    let temp = []
    let index = 0
    while (index < perPage) {
      temp.push(`${index + 1}`)
      index++
    }
    setPagination(temp)
  }

  const setupPagination = (startIndex = 0, page = currentPage) => {
    let temp = posts.slice(startIndex, perPage * page)
    const result = temp.map((it) => {
      return {
        ...it,
        userName: users.find((user) => user.id === it.userId).name,
      }
    })
    setShowPosts(result)
  }

  const onChangePagination = (page) => {
    setCurrentPage(page)
    const startIndex = page > 1 ? (page - 1) * perPage + 1 : 0
    setupPagination(startIndex, page)
    window.scrollTo(0, 0)
  }

  const onPrev = () => {
    if (currentPage === 1) return
    onChangePagination(currentPage - 1)
  }

  const onNext = () => {
    if (currentPage === 10) return
    onChangePagination(currentPage + 1)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    setPerPage(posts.length / 10)
    initPagination()
    setupPagination()
  }, [posts])

  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <Search />
      {showPosts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userName={post.userName}
        />
      ))}
      {/* pagination */}
      <div className="w-full flex justify-end text-slate-400 py-20">
        <div className="flex gap-x-4">
          <p onClick={onPrev} className="cursor-pointer">
            prev
          </p>
          {pagination.map((page, index) => (
            <div
              key={index}
              className={`px-2 cursor-pointer ${
                page == currentPage ? "border-blue-400 border-b-4" : ""
              }`}
              onClick={() => onChangePagination(Number(page))}
            >
              <p>{page}</p>
            </div>
          ))}
          <p onClick={onNext} className="cursor-pointer">
            next
          </p>
        </div>
      </div>
      {/* pagination */}
    </div>
  )
}

export default Dashboard

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
  const [keyword, setKeyword] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([])
  const [showFilteredPosts, setShowFilteredPosts] = useState([])
  const users = useContext(DataContext)

  const initPagination = (updatedPagination = null) => {
    let temp = []
    let index = 0
    if (!!updatedPagination) {
      while (index < updatedPagination) {
        temp.push(`${index + 1}`)
        index++
      }
      setPagination(temp)
    } else {
      while (index < perPage) {
        temp.push(`${index + 1}`)
        index++
      }
      setPagination(temp)
    }
  }

  const setupPagination = (
    startIndex = 0,
    page = currentPage,
    searchResult = []
  ) => {
    let temp
    if (!!searchResult.length) {
      temp = searchResult.slice(startIndex, perPage * page)
    } else {
      temp = posts.slice(startIndex, perPage * page)
    }
    const result = temp.map((it) => {
      return {
        ...it,
        userName: users?.find((user) => user.id === it.userId).username,
      }
    })
    if (!!filteredPosts.length) {
      setShowFilteredPosts(result)
    } else {
      setShowPosts(result)
    }
  }

  const onChangePagination = (page) => {
    setCurrentPage(page)
    const startIndex = page > 1 ? (page - 1) * perPage : 0
    setupPagination(startIndex, page, filteredPosts)
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
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (res.ok) {
        const temp = await res.json()
        const data = [...temp].map((it) => {
          return {
            ...it,
            userName: users?.find((user) => user.id === it.userId).username,
          }
        })
        setPosts(data)
      }
    }
    fetchPosts()
  }, [users])

  useEffect(() => {
    if (!keyword.length) {
      setPerPage(posts.length / 10)
      initPagination()
      setupPagination()
    }
  }, [posts, keyword, perPage])

  useEffect(() => {
    const temp = posts.filter((post) =>
      post.userName?.toLowerCase().includes(keyword.toLowerCase())
    )
    if (!!temp.length && !!keyword.length) {
      setFilteredPosts(temp)
      initPagination(Math.round(temp.length / 10))
      setCurrentPage(1)
      setupPagination(0, 1, temp)
    }
  }, [keyword, perPage])

  return (
    <div className="max-w-xl mt-8 mx-auto flex flex-col gap-y-8">
      <Search keyword={keyword} setKeyword={setKeyword} />
      {!showFilteredPosts.length
        ? showPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userName={post.userName}
            />
          ))
        : showFilteredPosts.map((post) => (
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

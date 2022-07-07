import React, {useState, useEffect} from 'react'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/posts/')
    let data = await response.json()
    setPosts(data)
    console.log('posts!', posts)
  }

  return (
    <div>
        <h2>Home Page</h2>

    </div>
  )
}

export default Home
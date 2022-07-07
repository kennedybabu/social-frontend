import React, {useState, useEffect} from 'react'
import Post from '../components/Post'

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
        {posts.map((post) => {
          return <Post  title={post.title} body={post.body} key={post.id} />
        })}

    </div>
  )
}

export default Home
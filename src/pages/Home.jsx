import React, {useState, useEffect} from 'react'
import Post from '../components/Post'
// import PostPage from '../components/PostPage'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  let getPosts = async () => {
    let response = await fetch('/posts/posts/')
    let data = await response.json()
    setPosts(data)
    console.log('posts!', posts)
  }

  return (
    <div>
        {posts.map((post, index) => {
          return <Post post={post} key={index}/>
        })}

    </div>
  )
}

export default Home
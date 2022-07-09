import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <Link to={`/post/${post.id}`}>
        <h4>{post.title}</h4>
    </Link>
  )
}

export default Post
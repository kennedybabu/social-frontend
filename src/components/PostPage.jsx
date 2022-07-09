import React, {useState, useEffect} from 'react'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const PostPage = ({ match }) => {
    let postId = match.params.id

    let [post, setPost] = useState(null)
    
    
    useEffect(() => {
        getPost()
    }, [postId])


    let getPost = async () => {
        let response = await fetch(`/posts/posts/${postId}`)
        let data = await response.json()

        setPost(data)
    }

  return (
    <div>
        <Link to='/'>
            <h3><BsArrowLeftCircleFill /></h3>
        </Link>
        <p>{post?.body}</p>
    </div>
  )
}

export default PostPage
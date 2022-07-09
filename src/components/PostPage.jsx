import React, {useState, useEffect} from 'react'

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
        <p>{post?.body}</p>
    </div>
  )
}

export default PostPage
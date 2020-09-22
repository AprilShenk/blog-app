import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {
  
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props.id}`}>
        <img className="post-card-image"
            src={props.imgURL}
            alt="Not available" />
        <p className="post-card-title">${props.title}</p>
        <p>...Read more</p>
      </Link>
    </div>
  )
}

export default PostCard
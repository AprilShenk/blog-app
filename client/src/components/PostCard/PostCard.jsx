import React from 'react'

function PostCards(props) {
  
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <img className="post-card-image"
            src={props.imgURL}
            alt="Image not available" />
        <p className="post-card-title">${props.title}</p>
        <p>...Read more</p>
      </Link>
    </div>
  )
}

export default PostCard
import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <h3 className="post-title">{props.title}</h3>
        <img className="post-img" src={props.imgURL} alt={props.name} />
        <div className="post-content">{props.content}</div>
        <div className="post-author">{props.author}</div>
      </Link>
    </>
  )
}

export default Post

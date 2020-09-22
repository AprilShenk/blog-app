import Layout from '../../components/shared/Layout/Layout'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost, deletePost } from '../../services/posts';

const PostDetail = () => {

  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h2>Loading...</h2>
  }

  return (
    <Layout>
      <div className="post-detail">
        <img src={post.imgURL} alt={"no-information-available"} />
        <h3>{post.title}</h3>
        <h6>{post.author}</h6>
        <p>{post.content}</p>
        <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
        <button className="delete-button" onClick={() => deletePost(post._id)}>Delete</button>
      </div>
    </Layout>
  );
};

export default PostDetail;
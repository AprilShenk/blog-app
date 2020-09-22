import Layout from '../../components/shared/Layout/Layout'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../services/posts';

const PostDetail = () => {

  const [posts, setPost] = useState(null);
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
        <img src={posts.imgURL} alt={"no-information-available"} />
        <h3>{posts.title}</h3>
        <h6>{posts.author}</h6>
        <p>{posts.content}</p>
      </div>
    </Layout>
  );
};

export default PostDetail;
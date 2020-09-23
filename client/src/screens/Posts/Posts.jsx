import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'

const Posts = () => {
  const [allPosts, setAllPosts] = useState([])
  // const [queriedPosts, setQueriedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      // setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  const postsJSX = allPosts.map((post, index) => 
    <Post _id={post._id} title={post.title} imgURL={post.imgURL} content={post.content} author={post.author} key={index} />
  )

  return (
    <Layout>
      <div className="posts">
        {postsJSX}
      </div>
    </Layout>
  );
};

export default Posts; 
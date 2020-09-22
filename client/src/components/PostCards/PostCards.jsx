import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

function PostCards(props) {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
    }
    fetchPosts()
  }, [])
  
const cards = allPosts.map((posts, idx) => (
       <PostCard id={posts._id} title={posts.title} imgURL={posts.imgURL} key={idx} />
     ))
  return (
    <div className="post-cards">
      {cards}
    </div>
  );
}
export default PostCards;

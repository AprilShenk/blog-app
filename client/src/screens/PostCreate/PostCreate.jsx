import Layout from "../../components/shared/Layout/Layout";
import React, { useState } from "react";
import { createPost } from "../../services/posts";
import { Redirect } from "react-router-dom";
import "./PostCreate.css";

const PostCreate = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
    author: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created })
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <Layout>
      <div className="create-container">
        <h3>Create your new post here.</h3>
      <form className='create-from' onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="input-content"
          rows={8}
          placeholder="Content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          type="link"
          className="input-image-link"
          placeholder='Image Link'
          value={post.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default PostCreate;

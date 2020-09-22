
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img
            className="edit-post-image"
            src={post.imgURL}
            alt={`no information availiable`}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="textarea-content"
            rows={10}
            cols={78}
            placeholder="Content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button" >Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
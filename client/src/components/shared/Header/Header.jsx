import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link className="header-links" id="header-title" to="/">Blog App</Link>
      <Link className="header-links" id="header-posts" to="/">Posts</Link>
      <Link className="header-links" id="header-add-post" to="/">Add Post</Link>
    </div>
  )
}

export default Header
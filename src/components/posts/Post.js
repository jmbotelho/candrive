import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
    </div>
  );
};

export default Post;

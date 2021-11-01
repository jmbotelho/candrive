import React from "react";
import Post from "./Post";

const PostsList = ({ posts, name }) => {
  const renderPosts = posts.map((post) => {
    return <Post post={post} />;
  });

  return (
    <div className="posts">
      <header>
        <h2 className="block__header">Posts by {name}</h2>
      </header>
      <section className="block">
        {posts.length ? renderPosts : <h2>No posts found</h2>}
      </section>
    </div>
  );
};

export default PostsList;

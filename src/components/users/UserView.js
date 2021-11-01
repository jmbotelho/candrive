import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import { fetchUser, fetchPosts } from "../../actions/index";
import PostsList from "../posts/PostsList";

const UserView = (props) => {
  const { user, fetchUser, posts, fetchPosts } = props;
  const { id } = props.match.params;

  useEffect(() => {
    fetchUser(id);
    fetchPosts(id);
  }, [id, fetchUser, fetchPosts]);

  return (
    <div>
      <nav>
        <h2 className="breadcrumb">
          <Link to="/">User</Link>
          {user ? ` > ${user.name}` : ""}
        </h2>
      </nav>
      <UserDetails user={user} />
      {user && <PostsList posts={posts} name={user.name} />}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id],
    posts: Object.values(state.posts),
  };
};

export default connect(mapStateToProps, { fetchUser, fetchPosts })(UserView);

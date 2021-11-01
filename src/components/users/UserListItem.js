import React from "react";

const UserListItem = ({ userID, name, username, email, onUserItemClick }) => {
  return (
    <div className="user__item" onClick={() => onUserItemClick(userID)}>
      <div className="user__img"></div>
      <div className="user__details">
        <div>
          <div>{name}</div>
          <div>{username}</div>
        </div>
        <div className="details__email">
          <a href={`mailto:${email}`} onClick={(e) => e.stopPropagation()}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;

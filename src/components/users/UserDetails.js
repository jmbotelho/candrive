import React from "react";

const UserDetails = ({ user }) => {
  if (!user) {
    return (
      <div className="block">
        <div className="details__block details__item">User not found</div>
      </div>
    );
  }

  return (
    <div>
      <div className="block">
        <div className="details__block">
          <header>
            <h3 className="details__title">Contact Info</h3>
          </header>
          <div className="details__item">Username: {user.username}</div>
          <div className="details__item">
            Email: <a href={user.email}>{user.email}</a>
          </div>
          <div className="details__item">
            Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
          </div>
          <div className="details__item">
            Website: <a href={user.website}>{user.website}</a>
          </div>
        </div>
        <div className="details__block">
          <header>
            <h3 className="details__title">Address</h3>
          </header>
          <div className="details__item">
            {`${user.address.suite} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
          </div>
        </div>
        <div className="details__block">
          <header>
            <h3 className="details__title">Company</h3>
          </header>
          <div>
            <div className="details__item">{`${user.company.name}`}</div>
            <div className="details__item">{`${user.company.bs}`}</div>
            <div className="details__item--italicized">{`${user.company.catchPhrase}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

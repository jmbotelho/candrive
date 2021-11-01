import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import history from "../../history";
import UserListItem from "./UserListItem";
import SearchInput from "../controls/SearchInput";
import SelectInput from "../controls/SelectInput";
import {
  defaultSortByOption,
  userSortOptions,
} from "../../configs/sortOptions";
import {
  fetchUsers,
  setSearchValue,
  setSortByValue,
} from "../../actions/index";

const UserList = (props) => {
  const {
    users,
    sortByValue,
    setSortByValue,
    setSearchValue,
    fetchUsers,
    searchText,
  } = props;

  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchText);
  const [usersToRender, setUsersToRender] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    const term = debouncedSearchValue.toLowerCase();
    const userList = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(term) ||
        user.username.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    });
    const sortedUsers = [...userList].sort((a, b) =>
      a[sortByValue] > b[sortByValue] ? 1 : -1
    );
    setUsersToRender(sortedUsers);
  }, [users, debouncedSearchValue, sortByValue]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchValue(debouncedSearchValue);
    }, 200);

    return () => clearTimeout(timerId);
  }, [debouncedSearchValue, setSearchValue]);

  const handleUserItemClick = (userID) => {
    history.push(`/user/${userID}`);
  };

  const handleSortByChange = (option) => {
    setSortByValue(option);
  };

  const handleSearchValueChange = (value) => {
    setDebouncedSearchValue(value);
  };

  const renderedUserList = usersToRender.map((user) => {
    return (
      <UserListItem
        key={user.id}
        userID={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        onUserItemClick={handleUserItemClick}
      />
    );
  });

  return (
    <div className="block--list">
      <header>
        <h2 className="block__header">Users</h2>
      </header>
      <div className="controls">
        <SearchInput
          classes="control"
          id="searchInput"
          label="Search"
          value={searchText}
          onSearchValueChange={handleSearchValueChange}
        />
        <SelectInput
          classes="control"
          label="Sort By:"
          options={userSortOptions}
          onSortChange={handleSortByChange}
          selectedValue={sortByValue || defaultSortByOption.value}
        />
      </div>
      <div className="users">
        {renderedUserList.length ? renderedUserList : "No Users Found"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
    sortByValue: state.sortByValue,
    searchText: state.searchText,
    filteredUsers: state.filteredUsers,
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  setSearchValue,
  setSortByValue,
})(UserList);

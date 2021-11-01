import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import postReducer from "./postsReducer";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  searchText: searchReducer,
  sortByValue: sortReducer,
});

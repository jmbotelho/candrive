import api from "../apis/jsonPlaceholder";
import {
  FETCH_USER,
  FETCH_ALL_USERS,
  FETCH_USER_POSTS,
  SET_SORT_BY_VALUE,
  SET_SEARCH_VALUE,
} from "./types";

export const fetchUser = (userId) => {
  return async (dispatch) => {
    let response = {};
    try {
      response = await api.get(`/users/${userId}`);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: FETCH_USER, payload: response.data });
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    let response = {};
    try {
      response = await api.get(`/users`);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: FETCH_ALL_USERS, payload: response.data });
    }
  };
};

export const fetchPosts = (userId) => {
  return async (dispatch) => {
    let response = {};
    try {
      response = await api.get(`/posts?userId=${userId}`);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: FETCH_USER_POSTS, payload: response.data });
    }
  };
};

export const setSearchValue = (term) => {
  return async (dispatch) => {
    dispatch({ type: SET_SEARCH_VALUE, payload: term });
  };
};

export const setSortByValue = (value) => {
  return async (dispatch) => {
    dispatch({ type: SET_SORT_BY_VALUE, payload: value });
  };
};

import _ from "lodash";

import { FETCH_USER_POSTS } from "../actions/types";

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default postsReducer;

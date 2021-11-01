import { SET_SEARCH_VALUE } from "../actions/types";

const searchReducer = (state = "", action) => {
  if (action.type === SET_SEARCH_VALUE) {
    return action.payload;
  }

  return state;
};

export default searchReducer;

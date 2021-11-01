import { defaultSortByOption } from "../configs/sortOptions";
import { SET_SORT_BY_VALUE } from "../actions/types";

const sortReducer = (state = defaultSortByOption.value, action) => {
  if (action.type === SET_SORT_BY_VALUE) {
    return action.payload;
  }
  return state;
};

export default sortReducer;

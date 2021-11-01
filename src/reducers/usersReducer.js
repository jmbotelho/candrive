import _ from "lodash";

import { FETCH_USER, FETCH_ALL_USERS } from "../actions/types";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload)
        return { ...state, [action.payload.id]: action.payload };
      else return state;
    case FETCH_ALL_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default usersReducer;

import {
  OFF_LOAD,
  ON_LOAD,
  SET_FILTER,
  SET_POSTS,
  SET_USERS
} from "./types";

const initialState = {
  users: [],
  posts: [],
  filter: "",
  loading: false
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case ON_LOAD:
      return {
        ...state,
        loading: true
      };

    case OFF_LOAD:
      return {
        ...state,
        loading: false
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}

export { reducer };

import {
  OFF_LOAD,
  ON_LOAD,
  SET_FILTER,
  SET_POSTS,
  SET_USERS
} from "./types";

const setLoadingOn = () => ({ type: ON_LOAD });

const setLoadingOff = () => ({ type: OFF_LOAD });

const changeFilter = payload => ({ type: SET_FILTER, payload });

const setUsers = payload => ({ type: SET_USERS, payload });

const setPosts = payload => ({ type: SET_POSTS, payload });

const getData = () => async dispatch => {
  try {
    dispatch(setLoadingOn());

    const users = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();

    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();

    dispatch(setLoadingOff());

    dispatch(setPosts(posts));

    const payload = users.map(user => ({...user, posts: posts.filter(p => p.userId === user.id).length}))

    dispatch(setUsers(payload));
  } catch(e) {
    console.warn(e.message);
  }
}

export {
  getData,
  changeFilter
};

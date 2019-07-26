import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

const postsDispatcher = async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

export const fetchPosts = () => {
  return postsDispatcher;
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  console.log(response);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});

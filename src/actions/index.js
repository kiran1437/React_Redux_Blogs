import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

const postsDispatcher = async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

const _memoizedgetuser = _.memoize(id => {
  return jsonPlaceHolder.get(`/users/${id}`);
});

const _memoizeduserdispatcher = _.memoize((resdata, dispatch) => {
  dispatch({
    type: "FETCH_USER",
    payload: resdata
  });
});

export const fetchUser = id => async dispatch => {
  const response = await _memoizedgetuser(id);
  console.log(response);
  _memoizeduserdispatcher(response.data, dispatch);
};

export const fetchPosts = () => {
  return postsDispatcher;
};

import jsonPlaceHolder from "../apis/jsonPlaceHolder";

const postsDispatcher = async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};

export const fetchPosts = () => {
  return postsDispatcher;
};

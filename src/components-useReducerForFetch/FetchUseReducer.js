import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_FAIL":
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };

    default:
      return state;
  }
};

function FetchUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/typicode/demo/posts/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAIL" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "still loading!!wait pls! " : JSON.stringify(state.post)}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchUseReducer;

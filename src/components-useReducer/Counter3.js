// in this section we have replicated the same logic as Counter2
// but twith different code style
// here we define two useReduce Hooks and one comman reducer function used by both

import React from "react";
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        Count1 = {count}
        <button onClick={() => dispatch1("increment")}>Increment</button>
        <button onClick={() => dispatch1("decrement")}>Decrement</button>
        <button onClick={() => dispatch1("reset")}>reset</button>
      </div>
      <div>
        Count2 = {count2}
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>reset</button>
      </div>
    </div>
  );
}

export default Counter3;

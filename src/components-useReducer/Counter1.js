// simple useReducer example code
// steps:
// 1] import { useReducer } from "react";
// 2] define const [count, dispatch] = useReducer(reducer, initialState); inside the component
//     - count is the state here, it can be Int16Array, array, obj, etc; here it's an int
//     - dispatch is a method **
// 3] define reducer function outside which accepts (state, action) as arguements to it
//     - this usually has a switch case inside it for different actions
//     - action is a str here, but it can a object too or something else

import React, { useReducer } from "react";

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

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      count: {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Counter1;

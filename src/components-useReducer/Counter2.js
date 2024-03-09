//steps:
// 1] import { useReducer } from "react";
// 2] define const [count, dispatch] = useReducer(reducer, initialState); inside the component
//     - count is the state here, it can be Int16Array, array, obj, etc; here it's an object with two parameters firstCounter & firstCounter
//     - dispatch is a method **
// 3] define reducer function outside which accepts (state, action) as arguements to it
//     - this usually has a switch case inside it for different actions
//     - action is a object here, but it can anything else too
//     - action also has two paramters type & value

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>COUNTER 2 Component</h4>
      <div>count: {count.firstCounter}</div>
      <div>count: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5 </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset ctr 2</button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>Increment 5</button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>Decrement 5 </button>
      </div>
    </div>
  );
}

export default Counter2;

import { useContext } from "react";
import { CountContext } from "../App";

function A() {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div>
      inside componet A - {countState}
      <div>
        <button onClick={() => countDispatch("increment")}>Increment</button>
        <button onClick={() => countDispatch("decrement")}>Decrement</button>
        <button onClick={() => countDispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default A;

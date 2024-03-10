import { useContext } from "react";
import { CountContext } from "../App";

function D() {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div>
      inside componet D - {countState}
      <div>
        <button onClick={() => countDispatch("increment")}>Increment</button>
        <button onClick={() => countDispatch("decrement")}>Decrement</button>
        <button onClick={() => countDispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default D;

import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function inc5() {
    for (let i = 0; i < 5; ++i) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>--</button>
      <button onClick={inc5}>Inc+5</button>
    </div>
  );
}

export default HookCounter2;

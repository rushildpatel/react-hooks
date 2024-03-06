import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>counter: {count}</button>
    </div>
  );
}

export default HookCounter;

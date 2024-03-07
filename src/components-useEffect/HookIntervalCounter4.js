import React, { useEffect, useState } from "react";

function HookIntervalCounter() {
  const [count, SetCount] = useState(0);

  function tick() {
    SetCount((count) => count + 1);
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // always think before specifying an empty dependancy arrat!
  // QUOTE- "If you think dependency array is a way to specify when you want to rerun the effect, you are going to run into problems.
  // Instead, dependency array should be thought of as a way to let react know about everything that the effect must watch for changes."

  return <div>{count}</div>;
}

export default HookIntervalCounter;

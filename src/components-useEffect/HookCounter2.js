import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // here the useEffect is a conditional useEffect
  // along with the callback fn we have also passed the condition which react will monitor
  // everytime react notices the one or more of the monitored parameters has changed value it will re render and execute the useEffect
  useEffect(() => {
    console.log("useEffect executed - Updating the document title");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Increment Count {count}</button>
    </div>
  );
}

export default HookCounter;

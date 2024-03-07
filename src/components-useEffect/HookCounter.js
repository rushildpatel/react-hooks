import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  // the callabck function passed inside the useEffect, we are requesting react to execute that callaback function everytime the component renders
  // so -> useEffect runs after every render (when no arguemts passed)
  // useEffect is placed inside the component so that we can have access to all the props and state of the component (IMP!!)
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count {count}</button>
    </div>
  );
}

export default HookCounter;

// this is that way you implement useMemo Hook
// useMeno is used to optimize renders as it is a way to memoize and cache function invokes
// useMemo vs useCallback??
// useCallback caches the provided function incstance itself
// useMemo invokes the provided function and caches it's result
// so when you need to cache a function signature use useCallback  when you need to cache the result of a function use UseMemo

// NOTE - when using a useMemo remember to not call the func like func() whenever writing code
// here in this code see line number 35 ie <span>{isEven ? "even" : "odd"}</span>

import { useMemo, useState } from "react";

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment1 = () => {
    setCounter1((counter1) => counter1 + 1);
  };

  const increment2 = () => {
    setCounter2((counter2) => counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 1;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <div>
        <button onClick={increment1}>Counter1 - {counter1}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={increment2}>Counter2 - {counter2}</button>
      </div>
    </div>
  );
}

export default Counter;

// useCallback is used to optimize the code by preventing unecessary rerenders when callabck function signatures hasnt really changed
// if two exactly smae written funcs f1 and f2 are similar but, when f1 === f2 -> it's false
// so useCallback hook is used in such cases when
// NOTE - usually React.memo() is used often when useCallabck is used

import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  //   console.log("parent compo redering");
  const [age, setAge] = useState(15);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count countName={"age"} countValue={age} />
      <Button handleClick={incrementAge}>increment age</Button>
      <Count countName={"salary"} countValue={salary}></Count>
      <Button handleClick={incrementSalary}>increment salary</Button>
    </div>
  );
}

export default ParentComponent;

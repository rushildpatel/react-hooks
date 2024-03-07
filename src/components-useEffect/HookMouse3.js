import React, { useEffect, useState } from "react";

function HookMouse3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  // here we only want useEffect to on render the first time the component renders
  // inorder to do so we will pass an empty array as the arguement along with the callback fnc
  // so useEffect(callabckFn, []) -> will one execute once ie at the forst time it renders
  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      Cordinates: x = {x}, y = {y}
    </div>
  );
}

export default HookMouse3;

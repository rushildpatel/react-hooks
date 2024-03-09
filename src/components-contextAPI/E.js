import React from "react";
import F from "./F";

import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

// the mordern way to use useContext Hook instead of prop drilling!

function E() {
  const b = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {JSON.stringify(b)} - {channel}
    </div>
  );
}

export default E;

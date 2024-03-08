import React from "react";
import F from "./F";

import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function E() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default E;

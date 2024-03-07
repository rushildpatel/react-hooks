import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch1() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <ul>
        {posts.map((obj) => (
          <li key={obj.id}>{obj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch1;

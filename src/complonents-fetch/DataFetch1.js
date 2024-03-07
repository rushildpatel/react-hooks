import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch1() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/typicode/demo/posts`);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

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

import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch2() {
  const [id, setId] = useState(1);
  const [singlePost, setSinglePost] = useState({});

  //make a get req
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/typicode/demo/posts/${id}`);
        console.log(response.data);
        setSinglePost(response.data);
        console.log("this is it->", singlePost);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
      <div>{JSON.stringify(singlePost)}</div>
    </div>
  );
}

export default DataFetch2;

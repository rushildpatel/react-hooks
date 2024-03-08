// fetching single post taking user input but dont continuously fetch while user is typing input
// fetch only on button click

import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch2() {
  const [id, setId] = useState(1);
  const [singlePost, setSinglePost] = useState({});
  const [idFromButtonClick, setIdFromButtonClick] = useState(id);

  //make a get req
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/typicode/demo/posts/${idFromButtonClick}`);
        console.log(response.data);
        setSinglePost(response.data);
        // console.log("this is it->", singlePost);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
      <button type="button" onClick={(e) => setIdFromButtonClick(id)}>
        submit ID
      </button>
      <div>{JSON.stringify(singlePost)}</div>
    </div>
  );
}

export default DataFetch2;

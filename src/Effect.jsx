import React from "react";
import { useState, useEffect } from "react";


const Effect =()=>{
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
      return()=>{
        console.log('return from source');
      }
  },[resourceType]);

  return(
    <>
      <div>
        <button onClick={()=> setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>users</button>
        <button onClick={()=> setResourceType('comments')}>comments</button>

      </div>
      <h1>{resourceType}</h1>

    </>
  )

}

export default Effect;


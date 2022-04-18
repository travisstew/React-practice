import React, { useState } from "react";


const ReactState = ()=>{
   const [name,setName] = useState('zarriah');
   const [age,setAge] = useState(3);

  const handleClick = ()=>{
       setName('travis z daddy');
       setAge(10);
  }

  return(
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}{age}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ReactState;
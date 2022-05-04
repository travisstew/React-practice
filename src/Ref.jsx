import React from 'react'
import { useState, useRef } from 'react';

function Ref() {

  const [name, setName] = useState('');
  const inputRef = useRef();

  function focus() { 
    console.log(inputRef.current.focus());  
   }

  

  return (

    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>

  )
}

export default Ref;
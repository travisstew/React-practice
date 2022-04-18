import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  // const [oddOrEven, setOddorEven] = useState("to be determined");

  const addOne = ()=>{
    setCounterOne(counterOne + 1);

  }
  const addTwo = ()=>{
    setCounterTwo(counterTwo + 2 );
  }



const isEven =   useMemo(() =>{
    let i = 0;
    while( i < 2000000000) i++;

    return counterOne % 2 == 0
  },[counterOne]);
  
  return (
    <div>
      <button onClick={addOne}>count one - {counterOne}</button>
      <button onClick={addTwo}>count two - {counterTwo}</button>
      <div>
        <h1>
        
          {isEven?'even': 'odd'}
        
        </h1>
      </div>
    </div>
  )
}

export default Memo;
import React , {useState}from "react";
import BasicForms from "./BasicForms";
import Effect from "./Effect";
import ReactState from './ReactState';

const App2 =()=>{
  const [count, setCount] = useState(4);

const decCount = ()=>{
   setCount(prevCount => prevCount-1)
}
const incCount = ()=>{
   setCount(prevCount => prevCount+1)
}

  return(
    <>  
    {/* <ReactState /> */}
    {/* <div>
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <button onClick={incCount}>+</button>
    </div> */}
    {/* <BasicForms /> */}
    <Effect />

    </>
  )

}

export default App2;
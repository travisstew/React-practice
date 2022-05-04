import React , {useState}from "react";
import BasicForms from "./BasicForms";
import Effect from "./Effect";
import ReactState from './ReactState';
import Memo from "./Memo";
import Ref from "./Ref";
import Effect2 from "./Effect2";
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
    <Effect2 />

    </>
  )

}

export default App2;
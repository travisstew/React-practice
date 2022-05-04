
import { useState, useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
}

const reducer = (state, action)=>{
  return state;
};


function Effect2() {
const [state, dispatch] = useReducer(reducer, initialState)
console.log("render", state);

  return (
      <div>
      
      </div>
  )
}

export default Effect2
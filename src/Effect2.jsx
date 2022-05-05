
import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
}

const reducer = (state, action)=>{
  console.log('reducer', state, action);

  switch(action.type){
    case"getArticleSat":
    return{
      ...state,
      isLoading: true
    }
    case'getArticleSuccess':
      return {
        ...state,
        isLoading: false,
        data: action.payload,

      }

    case'getArticleFailure':
      return{
        ...state,
        isLoading: false,

      }
    default: 
      return state
  }


};


function Effect2() {

const [state, dispatch] = useReducer(reducer, initialState)
console.log("render", state);

useEffect(()=>{
  dispatch({type:"getArticleSat"});
  axios.get('http://localhost:3004/posts/1').then((res)=>{
    
    console.log(res);
    dispatch({type: 'getArticleSuccess', payload: res.data}).catch(()=>{
      dispatch({type: "getArticleFailure"});
    });
  })
},[]);

  return (
      <div>
         <h1>useReducer </h1>
          {state.isLoading && <div>Loading</div>}
          {state.data && <div>{state.data.title}</div>}
      </div>
  )
}

export default Effect2
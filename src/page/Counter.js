import React from 'react'
import { useState } from 'react'
export default function Counter() {
  

    const [count,setCount]=useState(0);
    
    function incrementCount() {
    setCount(count + 1);
  }
    const decrementCount=()=>{
      setCount(count-1);
    };
    const resetCount=()=>{
      setCount(0);
    };
  
  return (
    <div>
       <h1>Counter: {count}</h1>
        <button onClick={incrementCount}>Increment</button>  
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
           </div>
  )
}

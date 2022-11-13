import React from 'react'
import { useState } from "react";
import "./index.css";
import "./second";
export const App = () => {
  let [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>{setCounter(++counter)}}>+</button>
    </div>
  )
}

import { useState } from "react";
import "./index.css";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date("Dec 23 2023");
  date.setDate(date.getDate() + count);
  function stepDecrementFun() {
    setSteps((steps) => steps - 1);
  }

  function stepIncrementFun() {
    setSteps((steps) => steps + 1);
  }

  function countIncrementFun() {
    setCount((count) => count + steps);
  }

  function countDecrementFun() {
    setCount((count) => count - steps);
  }

  function handleReset(){
      setSteps(1);
      setCount(1);
  }

  return (
    <div>
      <div className="steps">
       
        <input
         type = "range"
         min = "0" 
         max = "10"
         value = {steps} 
         onChange = { e => setSteps(Number(e.target.value))}
         />
        
        <span>Steps : {steps}</span>
       
        <div>
          <button onClick={countDecrementFun}>-</button>
          <input
         type = "text"
         value = {count}
         onChange ={(e=> setCount(Number(e.target.value)))}
         />
          <button onClick={countIncrementFun}>+</button>
        </div>
    <p> {count} days from today is {date.toDateString()}</p>
    <button onClick = {handleReset}>Reset</button>
      </div>
    
    </div>

  
  );
}

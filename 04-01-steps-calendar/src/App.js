import { useState } from "react";
import "./index.css";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

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

  return (
    <div>
      <div className="steps">
        <button onClick={stepDecrementFun}>-</button>
        <span>Steps : {steps}</span>
        <button onClick={stepIncrementFun}>+</button>
        <div>
          <button onClick={countDecrementFun}>-</button>
          Count : {count}
          <button onClick={countIncrementFun}>+</button>
        </div>
    <p> {count} days from today is {date.toDateString()}</p>
      </div>
    </div>
  );
}

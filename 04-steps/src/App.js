import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Applying for jobs 💼",
  "Invest your new income 🤑",
];


export default function App(){
  return (

      <div>
      <Steps />
      {/* <Steps /> */}
      </div>
  );
}
function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "trinadh" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) 
    setStep((step) => step-1);
  }

  function handleNext() {
    if (step < 3) 
    setStep((s) => s+1);

    //BAD PRACTICE
    //test.name = "rayala";
    setTest({ name: "Rayala" });
  }
  return (
    <div>
      {/* inLine Function Button */}
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
         &times;
      </button>

      {isOpen && (

        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
            {test.name}
          </p>
          <div className="buttons">
            <Button textColor = "#fff" bgColor = "#7950f2" 
            onClick = {handlePrevious}
            >
                <span>🫲</span> Previous
            </Button>

            <Button textColor = "#fff" bgColor = "#7950f2" 
            onClick = {handleNext}
            text = "Next">
                <span>🫱</span> Next
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> */}
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>

      )}
    </div>
  );
}


function Button({textColor, bgColor, onClick, children}){
    return(
        <button style={{backgroundColor:bgColor, color : textColor}}
        onClick = {onClick}
        >
            {/* children is predefined in react for achieving perfect component reusabl */}
            {children}
        </button>
    );
}
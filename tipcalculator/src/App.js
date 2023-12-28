import { useState } from "react";

export default function App() {
  return (
    <div>
      <p>Tip Calculator</p>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {

  const [bill,setBill] = useState(0);
  const [selectPercentage1, setSelectPercentage1] = useState(0);
  const [selectPercentage2, setSelectPercentage2] = useState(0);

  const tip = bill * ((selectPercentage1 + selectPercentage2) / 2 /100)
  console.log(tip);

  function billReset(){
    setBill("");
    setSelectPercentage1(0);
    setSelectPercentage2(0);
  }

  return (
    <div>
      <BillInput bill = {bill} onSetBill = {setBill}/>
      <SelectPercentage percentage = {selectPercentage1} onSelect = {setSelectPercentage1}> How do you like the service?</SelectPercentage>
      <SelectPercentage percentage = {selectPercentage2} onSelect = {setSelectPercentage2}> How do your friend like the Service?</SelectPercentage>
      {
        bill > 0 && (
          <>
          <Output bill = {bill} tip = {tip} />
          <Reset onReset = {billReset}/>
          </>
        )
      }
    </div>
  );

}

function BillInput({bill, onSetBill}) {

  return(
    <div>
      <label>How Much was the bill?</label>
      <input 
        type = "text"
        placeholder = "Bill value" 
        value = {bill} 
        onChange ={(e) => onSetBill(Number(e.target.value))}/>
    </div>
  );

}

function SelectPercentage({children, percentage, onSelect}) {

  return(
    <div>
      <label>{children}</label>
      
      <select
      value = {percentage}
      onChange = {(e) => onSelect(Number(e.target.value))}>
        <option  value = "0">Dissatisfied (0%)</option>
        <option value = "5"> It was okay (5%)</option>
        <option value = "10"> It was good (10%)</option>
        <option value = "20"> Absolutely amazing !(20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip}) {
  return <h3> You pay {bill + tip} (${bill} +  ${tip} tip)</h3>
}

function Reset({onReset}) {
  return <button 
       onClick = {onReset}>Reset</button>
}

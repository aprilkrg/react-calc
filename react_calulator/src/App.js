import React, { useState } from 'react';
import './App.css';

function App() {

  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    setResult(Number(firstNum) + Number(secondNum));
  };
  const handleSubtract = () => {
    setResult(Number(firstNum) - Number(secondNum));
  };
  const handleMultiply = () => {
    setResult(Number(firstNum) * Number(secondNum));
  };
  const handleDivide = () => {
    setResult(Number(firstNum) / Number(secondNum));
  };

  return (
    <div className="App">
      <h1>
        React Calculator
      </h1>
      <form onSubmit={handleChange}>
        <input type="text" name="firstNum" value={firstNum} placeholder="number" onChange={(e) => setFirstNum(e.target.value)} />
        <input type="text" name="secondNum" value={secondNum} placeholder="number" onChange={(e) => setSecondNum(e.target.value)} />
      </form>
      <button onClick={() => { setOperator("+") }}>+</button>
      <button onClick={() => { setOperator("-") }}>-</button>
      <button onClick={() => { setOperator("*") }}>*</button>
      <button onClick={() => { setOperator("/") }}>/</button>

      <form onSubmit={handleChange}>
        {
          operator === "+" ?
          <button onClick={() => { handleAdd() }}>=</button>
            :
            null
        }
        {
          operator === "-" ?
            <button onClick={() => { handleSubtract() }}>=</button>
            :
            null
        }
        {
          operator === "*" ?
            <button onClick={() => { handleMultiply() }}>=</button>
            :
            null
        }
        {
          operator === "/" ?
            <button onClick={() => { handleDivide() }}>=</button>
            :
            null
        }
      </form>
        {
          result ?
          <p> = {result}</p>
          :
          null
        }
    </div>
  );
}

export default App;

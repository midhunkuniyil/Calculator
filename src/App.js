import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [result, setResult] = useState({ value: '', res: '0' });

  const handleClick = (e) => {
    setResult({ value: result.value.concat(e.target.value), res: '' });
  };

  const handleBackspace = () => {
    setResult({ value: result.value.slice(0, -1), res: '' });
  };

  const clear = () => {
    setResult({ value: '', res: '0' });
  };

  const calculate = () => {
    try {
      setResult({ value: '', res: eval(result.value) });
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result.res === '' ? result.value : result.res} />

      <div className="keypad">
        <button className="highlight" onClick={clear}>
          Clear
        </button>
        <button name="8" onClick={handleClick} value={'7'}>
          7
        </button>
        <button name="7" onClick={handleClick} value={'8'}>
          8
        </button>
        <button name="9" onClick={handleClick} value={'9'}>
          9
        </button>
        <button name="+" onClick={handleClick} value={'+'}>
          +
        </button>
        <button name="5" onClick={handleClick} value={'4'}>
          4
        </button>
        <button name="4" onClick={handleClick} value={'5'}>
          5
        </button>
        <button name="6" onClick={handleClick} value={'6'}>
          6
        </button>
        <button name="-" onClick={handleClick} value={'-'}>
          -
        </button>
        <button name="1" onClick={handleClick} value={'1'}>
          1
        </button>
        <button name="2" onClick={handleClick} value={'2'}>
          2
        </button>
        <button name="3" onClick={handleClick} value={'3'}>
          3
        </button>
        <button name="*" onClick={handleClick} value={'*'}>
          *
        </button>
        <button name="/" onClick={handleClick} value={'/'}>
          /
        </button>
        <button name="0" onClick={handleClick} value={'0'}>
          0
        </button>
        <button name="." onClick={handleClick} value={'.'}>
          .
        </button>
        <button className="highlight" onClick={calculate}>
          Calculate
        </button>
        <button onClick={handleBackspace}>Backspace</button>
      </div>
    </div>
  );
}

export default Calculator;
import React, { useState } from "react";
import "./App.css"; 

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="counter-container">
        <div className="header">
          <h1>Counter</h1>
        </div>
        <div className="display">
          <h2>{count}</h2>
        </div>
        <div className="buttons">
          <button className="btn count-btn" onClick={increment}>
            Count
          </button>
          <button className="btn reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="decrement-button">
          <button className="btn decrement-btn" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;

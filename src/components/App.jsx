import React, { useState } from "react";

function App() {
  const [count, increaseCount] = useState(0);
  function increase() {
    increaseCount(count + 1);
  }
  function decrease() {
    increaseCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

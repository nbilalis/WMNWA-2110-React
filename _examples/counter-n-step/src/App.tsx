import { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increaseCount = () => {
    setCount((prev) => prev + step);
  };

  return (
    <>
      <h1>Hello, world!</h1>
      <p>Current count: {count}</p>
      <p>
        Step:
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(+e.target.value);
          }}
        />
      </p>
      <p>
        <button type="button" onClick={increaseCount}>
          Click me!
        </button>
      </p>
    </>
  );
};

export default App;

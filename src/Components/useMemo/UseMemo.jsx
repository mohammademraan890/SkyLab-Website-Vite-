import { useMemo, useState } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Running heavy calculation...");
    for (let i = 0; i < 1000000000; i++) {
      // Do nothing
    } // Simulating heavy work
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}
  
export default UseMemo

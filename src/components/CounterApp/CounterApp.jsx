import "./counterApp.style.css";
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    if (count < 100) {
      setCount(count + 10);
    } else return;
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 10);
    } else return;
  };

  return (
    <>
      <div className="counter-app">
        <button onClick={handleClickMinus}>-10</button>
        <h1>{count}</h1>
        <button onClick={handleClickPlus}>+10</button>
      </div>
      <div className="text-container">
        {count >= 100 && <h1>You have reached your maximum limit</h1>}
        {count <= 0 && <h1>You have reached your minimun limit</h1>}
      </div>
    </>
  );
}

export default CounterApp;

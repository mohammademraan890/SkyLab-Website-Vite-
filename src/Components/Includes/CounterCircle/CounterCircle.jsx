import React from "react";
import "./CounterCircle.css";
const CounterCircle = ({ title, counter, bgColor, btmCircle }) => {
  return (
    <div
      className={`counter-right-circle text-center d-flex align-items-center justify-content-center flex-column ${
        btmCircle ? "counter-right-btm-circle" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <p>{title}</p>
      <h2 className="award-counter fw-bold">{counter}</h2>
    </div>
  );
};

export default CounterCircle;

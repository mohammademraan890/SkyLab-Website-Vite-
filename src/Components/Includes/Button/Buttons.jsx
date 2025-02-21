import React from "react";
import "./Button.css"; // Import CSS for styling

const Buttons = ({title,margin}) => {
  return (
    <div
      className={`btns cursor-pointer d-flex align-items-center justify-content-center mx-sm-0 
      `} style={{margin:margin }}
    >
      <a href="/">{title}</a>
    </div>
  );
};


export default Buttons;

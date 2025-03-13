import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./ThemeButton.css";
import secureLocalStorage from "react-secure-storage";

const ThemeButton = () => {
  const [mode, setMode] = useState("");
  const inputRef= useRef(null);
  useLayoutEffect(() => {
    const theme = secureLocalStorage.getItem("theme");
    console.log(theme, typeof theme);

    document.querySelector("body").setAttribute("data-theme", theme);
    setMode(theme);
    inputRef.current.checked= (theme === "dark")
    // console.log(inputRef.current)
  }, []);
  useEffect(() => {
    secureLocalStorage.setItem("theme", mode);
  }, [mode]);
  function handleMode(e) {
    // if (e.target.checked) {
    //   document.querySelector("body").setAttribute("data-theme", "dark");
    //   setMode("dark");
    // } else {
    //   document.querySelector("body").setAttribute("data-theme", "light");
    //   setMode("light");
    // }
    const newMode = e.target.checked? "dark":"light"
     setMode(newMode) 
    document.querySelector("body").setAttribute("data-theme", newMode)
    console.log(newMode)
  }

  return (
    <div>
     
      <input
        type="checkbox"
        className="checkbox"
        onChange={handleMode}
        id="checkbox"
        ref={inputRef}
        // checked={mode==="dark"}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeButton;

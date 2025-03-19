import { useLayoutEffect, useRef, useState } from "react";
import "./ThemeButton.css";
import secureLocalStorage from "react-secure-storage";

const ThemeButton = () => {
  const [mode, setMode] = useState("");
  const inputRef= useRef(null);
  useLayoutEffect(() => {

      if(mode=== ""){
        const theme = secureLocalStorage?.getItem("theme");
    
        document?.querySelector("body")?.setAttribute("data-theme", theme);
        inputRef.current.checked= (theme === "dark")
      }
      else{
        secureLocalStorage?.setItem("theme", mode);
        document?.querySelector("body")?.setAttribute("data-theme", mode)
      }

  }, [mode]);

  // useEffect(() => {
  //   secureLocalStorage.setItem("theme", mode)
  // }, [mode]);
  // function handleMode(e) {
  
  //   const newMode = e?.target?.checked? "dark":"light"
  //    setMode(newMode) 
  //   document?.querySelector("body")?.setAttribute("data-theme", newMode)
  //   console.log(newMode)
  // }

  return (
    <div>
     
      <input
        type="checkbox"
        className="checkbox"
        onChange={((e)=>{
          const newMode = e?.target?.checked? "dark":"light"
          setMode(newMode) 
     
        })}
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

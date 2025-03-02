import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);
    console.log("hello")
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Hello Imran";
        console.log(inputRef.current);
    }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <input className="btn btn-primary" type="button" value="Focus" onClick={handleClick} />
    </div>
  )
}

export default UseRef

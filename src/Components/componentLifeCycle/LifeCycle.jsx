import { useEffect, useRef, useState } from "react"

const LifeCycle = () => {
    const inputRef= useRef(null)
    const [state,setstate] = useState(0)
    console.log("Re-rendering")
    useEffect(()=>{
        console.log("Hello")
    })
  return (
    <div className="custom-container mt-5 d-flex gap-2">
      <input className="form-control " onChange={(()=>{setstate(inputRef.current.value)})} value={state} ref={inputRef} type="text"  />
      <input className="btn btn-primary" type="button" value="click" onClick={(()=>{inputRef.current.value= "Ali"})} />
      {/* <button className="btn btn-dark" onClick={(()=>{setstate(state+1)})}>state{state}</button> */}
    </div> 
  )
}

export default LifeCycle

import { useCallback, useState } from 'react'
import UseCallback2 from './UseCallback2';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    console.log("hello")

    const handleClick = useCallback(()=>{
        console.log("Button Clicked")
    },[])
  return (
    <div className='custom-container m-5'>
      <button className='btn btn-primary' onClick={(()=>{setCount(count+1)})}>Count {count}</button>
      <UseCallback2 handleClick={handleClick}></UseCallback2>
    </div>
  )
}

export default UseCallback

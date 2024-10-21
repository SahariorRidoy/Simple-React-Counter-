import { useState } from 'react'
import './Counter.css'

const Counter = () => {


    // State
     const [count, setCount] = useState(0)

    // Handle Click
    const handleCountIncrement=()=>{
     setCount(count+1)
    }
    const handleCountDecrement=()=>{
    if(count!==0){
        setCount(count-1)
    }
    }
  
  return (
    <div>
        <h1 >Simple Counter in React</h1>
         <h2 className='count-container'>Count: {count}</h2>
        <button className='btn' onClick={handleCountIncrement}>
          Increment:
        </button>
        <button className='btn' onClick={handleCountDecrement}>
          Decrement:
        </button>


    </div>
  )
}

export default Counter
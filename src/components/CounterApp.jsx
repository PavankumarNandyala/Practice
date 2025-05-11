import React,{useState} from 'react'
import './CounterApp.css'
function CounterApp() {
    const[count,setCount]=useState(0);
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
       
    }
    let stock=10;
    const increment=()=>{
        if(count<stock){
            setCount(count+1)
        }
       
    }
  return (
    <>
     <h1>Counter App</h1>
     <div className='Wrapper'>
     
      
        <button className="minus" onClick={decrement} disabled={count===0}>-</button>
        <p>{count}</p>
        <button className='plus' onClick={increment} disabled={count===stock}>+</button>
      
    </div>
    </>
   
  )
}

export default CounterApp

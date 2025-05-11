import React,{useState} from 'react'
import './Calculator.css'
function Calculator() {
  const[input,setInput]=useState("")

  function handleClick(value){
  setInput(input+value)
  }

  function calculate(value){
      let ouputVal=eval(input);
      setInput(ouputVal);
  }

  function clear(){
    
    setInput("");
}

  return (
    <div className='container'>
      <h1>Calculator App</h1>
      <div className='calculator'>
         <input type='text' className='output'value={input}/>

      </div>
      <div className='keypad'>
        <div className='colum'> 
          <button className='digit' onClick={()=>handleClick("7")}>7</button>
          <button className='digit'onClick={()=>handleClick("8")}>8</button>
          <button className='digit'onClick={()=>handleClick("9")}>9</button>
          <button className='operator' onClick={()=>handleClick("/")}>/</button>
        </div>
        <div>
          <button className='digit' onClick={()=>handleClick("4")}>4</button>
          <button className='digit' onClick={()=>handleClick("5")}>5</button>
          <button className='digit' onClick={()=>handleClick("6")}>6</button>
          <button className='operator'onClick={()=>handleClick("*")}>*</button>
        </div>
        <div>
          <button className='digit' onClick={()=>handleClick("1")}>1</button>
            <button className='digit' onClick={()=>handleClick("2")}>2</button>
            <button className='digit' onClick={()=>handleClick("3")}>3</button>
            <button className='operator'onClick={()=>handleClick("-")}>-</button>
        </div>
          

        
         <div>
          <button className='digit' onClick={()=>handleClick("0")}>0</button>
          <button className='func-key' onClick={()=>calculate()}>=</button>
          <button className='func-key' onClick={()=>clear()}>C</button>
          <button className='operator'onClick={()=>handleClick("+")}>+</button>
         </div>
       </div>

    </div>
  )
}

export default Calculator

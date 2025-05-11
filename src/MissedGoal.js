import React,{useState,useEffect} from 'react'
import './MissedGoal.css';
function MissedGoal() {
  const[time,setTime]=useState(0);
  const startTimer=()=>{
    window.myTimer=setInterval(()=>{
      setTime((time)=>time+1);
    },1000);
  };
   
  const StopTimer=()=>{
    clearInterval(window.myTimer);
  }
  const resetTimer=()=>{
    clearInterval(window.myTimer);
    setTime(0);
  }
  return (
    <div>
      <h1>Timer</h1>
      <h3>{Math.trunc(time/60)} mins {time%60} secs</h3>
      <div className="buttons">

     <button onClick={startTimer}>Start</button>
     <button onClick={StopTimer}>Stop</button>
     <button onClick={resetTimer}>Reset</button>
     </div>
    </div>
  )
}

export default MissedGoal

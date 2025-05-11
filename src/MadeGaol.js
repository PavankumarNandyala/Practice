import React from 'react'

export default function MadeGaol() {
  const submithandler=()=>{
    alert("submited")
  }
  return (
    <div>
      <h1>Login Details</h1>
      <h2>
        <lable>Username 
          
          <input type="text"/>
          <br></br>
        </lable>
        <label>Password
          <input type="password"/>
          <br></br>
        </label>
        <button onClick={submithandler} >Submit</button>
      </h2>
     
    </div>
  )
}
